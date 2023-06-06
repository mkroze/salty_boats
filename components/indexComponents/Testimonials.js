const Testimonials = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <section className="rounded-lg bg-dblue p-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:items-center">
          <img
            alt="Man"
            src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
            className="aspect-square w-full rounded-lg object-cover"
          />

          <blockquote className="sm:col-span-2">
            <p className="text-l font-medium  text-justify mx-4 text-cpink">
              Discovering this group of adventurous YouTubers was a captivating
              moment during a late-night scrolling session. Their videos took me
              on a journey to breathtaking destinations, forging a deep
              connection with their sense of adventure. Making the decision to
              donate to their cause has proven to be one of my best choices. By
              supporting their incredible journey, I became part of a vibrant
              community that shares a profound love for exploration and
              discovery. Witnessing how my contribution fuels their ongoing
              voyage and brings joy to countless viewers like myself is truly
              inspiring. Joining this adventure has enriched my life, and I
              wholeheartedly encourage everyone to donate and become part of
              something truly extraordinary.
            </p>

            <cite className="mt-8 inline-flex items-center not-italic">
              <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
              <p className="text-sm uppercase text-lgreen sm:ms-3">
                <strong>mkroze</strong>, Euphoria.
              </p>
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
