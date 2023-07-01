import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer } from 'react';
import { toast } from 'react-toastify';
import Layout from '../../components/Layout';
import { getError } from '../../utils/error';
import SideMenu from '../../components/adminComponents/SideMenu';
function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, donations: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };

    default:
      state;
  }
}
export default function AdminDonationsScreen() {
  const router = useRouter();

  const [
    { loading, error, donations, loadingCreate, successDelete, loadingDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    donations: [],
    error: '',
  });

  const createHandler = async () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      const { data } = await axios.post(`/api/admin/donations`);
      dispatch({ type: 'CREATE_SUCCESS' });
      toast.success('Donation created successfully');
      router.push(`/admin/donation/${data.donation._id}`);
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/donations`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const deleteHandler = async (donationId) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }
    try {
      dispatch({ type: 'DELETE_REQUEST' });
      await axios.delete(`/api/admin/donations/${donationId}`);
      dispatch({ type: 'DELETE_SUCCESS' });
      toast.success('Donation deleted successfully');
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="Admin Donations">
      <div className="grid md:grid-cols-4 md:gap-5">
        <SideMenu step={2} />
        <div className="overflow-x-auto md:col-span-3">
          <div className="flex justify-between">
            <h1 className="mb-4 text-xl">Donations</h1>
            {loadingDelete && <div>Deleting donation...</div>}
            <button
              disabled={loadingCreate}
              onClick={createHandler}
              className="mt-6  rounded-md bg-lgreen py-1.5 font-medium text-blue-50 hover:bg-dblue"
            >
              {loadingCreate ? 'Loading' : 'Create'}
            </button>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div className="alert-error">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              {/* title: {
type: String,
required: true,
},
image: {
type: String,
required: true,
},
bio: {
type: String,
required: true,
},
urgency: {
type: String,
required: true,
}, */}
              <table className="min-w-full">
                <thead className="border-b">
                  <tr className="rounded-md">
                    <th className="px-5 text-left bg-lgreen rounded-l-md">
                      ID
                    </th>
                    <th className="p-5 text-left bg-lgreen">Title</th>
                    <th className="p-5 text-left bg-lgreen">Image</th>
                    <th className="p-5 text-left bg-lgreen">Bio</th>
                    <th className="p-5 text-left bg-lgreen">Urgency</th>
                    <th className="p-5 text-left bg-lgreen rounded-r-md">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {donations.map((donation) => (
                    <tr key={donation._id} className="border-b">
                      <td className=" p-5 ">
                        {donation._id.substring(20, 24)}
                      </td>
                      <td className=" p-5 ">{donation.title}</td>
                      <td className=" p-5 ">${donation.image}</td>
                      <td className=" p-5 ">{donation.bio}</td>
                      <td className=" p-5 ">{donation.urgency}</td>

                      <td className=" p-5 ">
                        <a
                          href={`/admin/donation/${donation._id}`}
                          type="button"
                          className="mt-6 rounded-md bg-lgreen py-1.5 font-medium text-blue-50 hover:bg-dblue"
                        >
                          Edit
                        </a>
                        &nbsp;
                        <button
                          onClick={() => deleteHandler(donation._id)}
                          className="mt-6 rounded-md bg-lgreen py-1.5 font-medium text-blue-50 hover:bg-dblue"
                          type="button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

AdminDonationsScreen.auth = { adminOnly: true };
