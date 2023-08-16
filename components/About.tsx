function About() {
    return (
        <div className="p-6 md:p-8">
        <div className="flex items-center space-x-0 mb-0 md:mb-1">
          <img src="/assets/copyright.svg" alt="Copyright" className="pb-1.5 h-4 md:h-6"/>
          <p className="text-custom-white text-base md:text-2xl">
            <span className="text-custom-white text-xl md:text-3xl" style={{ fontFamily: 'var(--font-gracia)' }}>East Park</span>,{' '}Holdings Group
          </p>
        </div>
        <div>
          <p className="text-custom-white text-base md:text-2xl mb-1 md:mb-2">
            building ⎯{' '}
            <a href="#" className="underline underline-offset-4 md:underline-offset-8 decoration-from-font hover:opacity-50 hover-italic">P307</a>,{' '}
            <a href="#" className="underline underline-offset-4 md:underline-offset-8 decoration-from-font hover:opacity-50 hover-italic">Cooper’s Garden</a>,{' '}
            <a href="#" className="underline underline-offset-4 md:underline-offset-8 decoration-from-font hover:opacity-50 hover-italic">A Palé Films</a>{'〖..〗'}
          </p>
        </div>
        <div className="flex items-center space-x-1 mb-1 md:mb-2">
          <img src="/assets/phone.svg" alt="Phone" className="pb-1.5 h-6 md:h-8"/>
          <p className="text-custom-white text-base md:text-2xl">1.968.213.1203</p>
        </div>
        <div className="flex items-center space-x-1 mb-1 md:mb-2">
          <img src="/assets/email.svg" alt="Email" className="pb-1.5 h-5 md:h-7"/>
          <p className="text-custom-white text-base md:text-2xl" style={{ fontFamily: 'var(--font-pp-light-italic)' }}>
            <a href="mailto:info@eastpark.xyz" className="decoration-from-font hover:opacity-50">info[at]eastpark.xyz</a>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/assets/ellipse-ny.svg" alt="Ellipse New York" className="pb-1.5 md:pb-1.5 h-6 md:h-8"/>
          <p className="text-custom-white text-base md:text-2xl">
            10002, <span className="text-xl md:text-3xl" style={{ fontFamily: 'var(--font-gracia)' }}>New York City</span>
          </p>
        </div>
      </div>
    );
  }
  
  export default About;
  
  
  