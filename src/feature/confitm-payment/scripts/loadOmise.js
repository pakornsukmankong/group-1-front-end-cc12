const loadOmise = (callback) => {
    const existingScript = document.getElementById('omisePayment');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://cdn.omise.co/omise.js';
      script.id = 'omisePayment';
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  export default loadOmise;
  