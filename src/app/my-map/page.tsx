import React from 'react';

function page() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227782.3706690224!2d75.7342365111039!3d26.86857834039414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1707758217483!5m2!1sen!2sin"
        width="800"
        height="600"
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default page;
