import React from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <a className="text-gray-600 hover:underline" href="#">
                  fayazjr212@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-gray-600" />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <a className="text-gray-600 hover:underline" href="#">
                  +91 9791803884
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
