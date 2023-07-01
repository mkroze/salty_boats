import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from '../../../components/Layout';
import { getError } from '../../../utils/error';
import SideMenu from '../../../components/adminComponents/SideMenu';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    case 'UPDATE_REQUEST':
      return { ...state, loadingUpdate: true, errorUpdate: '' };
    case 'UPDATE_SUCCESS':
      return { ...state, loadingUpdate: false, errorUpdate: '' };
    case 'UPDATE_FAIL':
      return { ...state, loadingUpdate: false, errorUpdate: action.payload };

    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        loadingUpload: false,
        errorUpload: '',
      };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      return state;
  }
}
export default function AdminArticleEditScreen() {
  const { query } = useRouter();
  const donationId = query.id;
  const [{ loading, error, loadingUpdate, loadingUpload }, dispatch] =
    useReducer(reducer, {
      loading: true,
      error: '',
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/donations/${donationId}`);
        dispatch({ type: 'FETCH_SUCCESS' });
        setValue('title', data.title);
        setValue('image', data.image);
        setValue('bio', data.bio);
        setValue('urgency', data.urgency);
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, [donationId, setValue]);

  const router = useRouter();

  const uploadHandler = async (e, imageField = 'image') => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const {
        data: { signature, timestamp },
      } = await axios('/api/admin/cloudinary-sign');

      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);
      dispatch({ type: 'UPLOAD_SUCCESS' });
      setValue(imageField, data.secure_url);
      toast.success('File uploaded successfully');
    } catch (err) {
      dispatch({ type: 'UPLOAD_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  const submitHandler = async ({ title, image, summary, description }) => {
    try {
      dispatch({ type: 'UPDATE_REQUEST' });
      await axios.put(`/api/admin/donations/${donationId}`, {
        title,
        image,
        summary,
        description,
      });
      dispatch({ type: 'UPDATE_SUCCESS' });
      toast.success('Article updated successfully');
      router.push('/admin/donations');
    } catch (err) {
      dispatch({ type: 'UPDATE_FAIL', payload: getError(err) });
      toast.error(getError(err));
    }
  };

  return (
    <Layout title={`Edit Article ${donationId}`}>
      <div className="grid md:grid-cols-4 md:gap-5">
        <SideMenu step={4} />
        <div className="md:col-span-3">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <form
              className="mx-auto max-w-screen-md"
              onSubmit={handleSubmit(submitHandler)}
            >
              <h1 className="mb-4 text-xl">{`Edit Article ${donationId}`}</h1>
              <div className="mb-4">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="title"
                  autoFocus
                  {...register('title', {
                    required: 'Please enter title',
                  })}
                />
                {errors.title && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>

              <div className="mb-4">
                <label htmlFor="image">Image</label>
                <input
                  type="text"
                  className="w-full rounded-md"
                  id="image"
                  {...register('image', {
                    required: 'Please enter image',
                  })}
                />
                {errors.image && (
                  <div className="text-red-500">{errors.image.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="imageFile">Upload image</label>
                <input
                  type="file"
                  className="w-full  rounded-md"
                  id="imageFile"
                  onChange={uploadHandler}
                />

                {loadingUpload && <div>Uploading....</div>}
              </div>
              <div className="mb-4">
                <label htmlFor="bio">bio</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="bio"
                  {...register('bio', {
                    required: 'Please enter bio',
                  })}
                />
                {errors.bio && (
                  <div className="text-red-500">{errors.bio.message}</div>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="urgency">urgency</label>
                <input
                  type="text"
                  className="w-full  rounded-md"
                  id="urgency"
                  {...register('urgency', {
                    required: 'Please enter urgency',
                  })}
                />
                {errors.urgency && (
                  <div className="text-red-500">
                    {errors.urgency.message}
                  </div>
                )}
              </div>

              <div className="mb-4 flex justify-center">
                <button
                  disabled={loadingUpdate}
                  className="m-auto w-1/2 rounded-md bg-green-500 py-1.5 font-medium hover:bg-green-600"
                >
                  {loadingUpdate ? 'Loading' : 'Update'}
                </button>
              </div>
              <div className="mb-4">
                <Link href={`/admin/donations`}>Back</Link>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminArticleEditScreen.auth = { adminOnly: true };
