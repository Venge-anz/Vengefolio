import { AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { CgMail } from 'react-icons/cg';
import { MdDone } from 'react-icons/md';

import { useState } from 'react';
import { sendEmail } from '../services/sendEmail';

const initialValue = {
  name: '',
  subject: '',
  message: '',
  email: '',
};

export const Contact = () => {
  const [isSent, setisSent] = useState(false);

  const [formState, setFormState] = useState(initialValue);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  console.log(formState);

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail(formState);
    setisSent(true);

    setTimeout(() => {
      setFormState(initialValue);
      setisSent(false);
    }, 2000);
  };

  return (
    <div className="w-full flex justify-center p-6 bg-danger mb-5">
      <div className="w-full max-w-[1200px] text-gray-700 flex flex-col md:flex-row gap-10">
        {/* TITULO */}
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="relative text-xl sm:text-3xl font-bold inline-block">
              Get In Touch
              <span className="absolute left-0 bottom-0 w-10 border-b-4 rounded-full border-purple-500"></span>
            </h1>
            <p>
              Have a question or want to chat about my projects? Feel free to
              send me a message—
              <br />
              I’d be happy to hear from you!
            </p>
          </div>

          {/* CONTACTO Y FORMULARIO */}
          <div className="flex flex-col sm:flex-row gap-59">
            {/* CONTACT INFORMATION */}
            <div className="flex-1 flex flex-col gap-10">
              <div>
                <h2 className="font-bold text-xl mt-4">Contact information</h2>
                <p>
                  Send me a message using the form, and I’ll reply as soon as I
                  can!
                </p>
              </div>

              <div className="flex items-start gap-2">
                <AiOutlineMail className="text-purple-600 w-6 h-6" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="font-light">vivorosaclaudia@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CiLocationOn className="text-purple-600 w-6 h-6" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="font-light">Valencia, Spain</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xl">Connect with me</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Venge-anz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-300 rounded-full transform transition hover:scale-110 hover:rotate-6 text-gray-800 hover:text-purple-500"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/claudia-vivo-rosa-97795b161/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-300 rounded-full transform transition hover:scale-110 hover:rotate-6 text-gray-800 hover:text-purple-500"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>

                  <a
                    href="mailto:vengedev14@gmail.com"
                    className="p-3 bg-gray-300 rounded-full transform transition hover:scale-110 hover:rotate-6 text-gray-800 hover:text-purple-500"
                  >
                    <CgMail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="flex-1 bg-white rounded-xl border border-gray-300 p-6 shadow-lg">
          <form
            id="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <div className="flex-1 flex flex-col">
                <label className="mb-1">Your Name</label>
                <input
                  value={formState.name}
                  type="text"
                  onChange={handleChangeInput}
                  name="name"
                  placeholder="David G."
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
              </div>
              <div className="flex-1 flex flex-col mt-4 sm:mt-0">
                <label className="mb-1">Your Email</label>
                <input
                  onChange={handleChangeInput}
                  value={formState.email}
                  name="email"
                  type="email"
                  placeholder="david@example.com"
                  required
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Subject</label>
              <input
                type="text"
                onChange={handleChangeInput}
                name="subject"
                value={formState.subject}
                placeholder="How can I help you?"
                required
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1">Message</label>
              <textarea
                name="message"
                onChange={(e) => handleChangeInput(e)}
                value={formState.message}
                placeholder="Message"
                required
                rows={5}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full resize-none"
              ></textarea>
            </div>

            {isSent === false ? (
              <button
                type="submit"
                className="bg-purple-400 hover:bg-purple-500 text-white font-bold rounded-lg p-2 w-full sm:w-auto transition cursor-pointer"
              >
                Send Message
              </button>
            ) : (
              <button
                type="submit"
                className="bg-purple-400 hover:bg-purple-500 text-white font-bold rounded-lg p-2 w-full sm:w-auto transition cursor-pointer"
              >
                <div className="flex flex-row gap-2 items-center justify-center">
                  Sent successfully
                  <MdDone />
                </div>
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
