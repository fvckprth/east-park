function Info() {
    return (
      <div className="p-6 md:p-8">
        <p className="pb-4 md:pb-6 text-custom-white text-base md:text-xl">
          <span style={{ fontFamily: 'var(--font-pp-light-italic)' }}>East Park</span> Holdings Group is located in<br/>
          New York City, New York. Created from<br/>
          a collective of passionate commerce, media,<br/>
          and environmental enthusiasts.<br/>
        </p>
        <p className="pb-4 md:pb-6 text-custom-white text-base md:text-xl">
          We created this as a beacon for building<br/>
          things that forge a greener, more accessible,<br/>
          and joyfully brighter future.<br/>
        </p>
        <p className="pb-4 md:pb-6 text-custom-white text-base md:text-xl">
          To learn more, contact <a href="mailto:info@eastpark.xyz" className="underline underline-offset-8 decoration-from-font hover:opacity-50 hover-italic">info@eastpark.xyz</a>
        </p>
      </div>
    );
  }
  
  export default Info;
  