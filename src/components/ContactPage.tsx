import React, {useState} from "react";
import {Phone, Mail, MapPin, Clock, Send} from "lucide-react";
import {company, telHref} from "../data/company";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const subjects = [
    {value: "installation", label: "Суурилуулалтын үйлчилгээ"},
    {value: "maintenance", label: "Засвар үйлчилгээ"},
    {value: "monitoring", label: "Хяналт, харуул хамгаалалт"},
    {value: "alarm", label: "Дохиолол хамгаалалт"},
    {value: "product", label: "Бүтээгдэхүүний лавлагаа"},
    {value: "quote", label: "Үнийн санал авах"},
    {value: "other", label: "Бусад"},
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend байхгүй тул хэрэглэгчийн имэйл програмыг бөглөсөн захиатай нээнэ
    const subjectLabel =
      subjects.find((s) => s.value === formData.subject)?.label ?? "";
    const body = [
      `Нэр: ${formData.name}`,
      `Утас: ${formData.phone}`,
      `Имэйл: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      `[Вэбсайт] ${subjectLabel}`
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({name: "", phone: "", email: "", subject: "", message: ""});
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='pt-20'>
      {/* Hero Section */}
      <section className='bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl lg:text-5xl mb-6'>Холбоо барих</h1>
            <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
              Манай мэргэжилтнүүдтэй холбогдож үнэ төлбөргүй зөвлөгөө аваарай
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-3 gap-8'>
            {/* Contact Information */}
            <div className='lg:col-span-1 space-y-6'>
              {/* Contact Cards */}
              <div className='bg-white rounded-xl p-6 shadow-md'>
                <div className='bg-[#1e3a8a] w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Phone className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-lg text-gray-900 mb-2'>Утас</h3>
                {company.phones.map((phone, i) => (
                  <a
                    key={i}
                    href={telHref(phone)}
                    className='block text-gray-600 mb-1 hover:underline'>
                    {phone}
                  </a>
                ))}
                <p className='text-sm text-gray-500 mt-2'>{company.emergency}</p>
              </div>

              <div className='bg-white rounded-xl p-6 shadow-md'>
                <div className='bg-[#1e3a8a] w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Mail className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-lg text-gray-900 mb-2'>Имэйл</h3>
                <a
                  href={`mailto:${company.email}`}
                  className='text-gray-600 hover:underline'>
                  {company.email}
                </a>
              </div>

              <div className='bg-white rounded-xl p-6 shadow-md'>
                <div className='bg-[#1e3a8a] w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <MapPin className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-lg text-gray-900 mb-2'>Хаяг</h3>
                <p className='text-gray-600'>{company.address}</p>
              </div>

              <div className='bg-white rounded-xl p-6 shadow-md'>
                <div className='bg-[#1e3a8a] w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
                  <Clock className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-lg text-gray-900 mb-2'>Ажлын цаг</h3>
                <div className='text-gray-600 space-y-1 text-sm'>
                  {company.hours.map((h, i) => (
                    <div key={i} className='flex justify-between'>
                      <span>{h.days}:</span>
                      <span>{h.time}</span>
                    </div>
                  ))}
                  <div className='mt-2 pt-2 border-t border-gray-200'>
                    <span className='text-green-600'>{company.emergency}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className='lg:col-span-2'>
              <div className='bg-white rounded-xl p-8 shadow-md'>
                <h2 className='text-2xl text-gray-900 mb-6'>
                  Бидэнд зурвас илгээх
                </h2>

                {submitted && (
                  <div className='mb-6 bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg'>
                    Таны имэйл програм нээгдлээ. Захиагаа илгээснээр бид 24 цагийн
                    дотор эргэн холбогдоно.
                  </div>
                )}

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-6'>
                    <div>
                      <label
                        htmlFor='name'
                        className='block text-sm text-gray-700 mb-2'>
                        Овог нэр *
                      </label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none'
                        placeholder='Бат-Эрдэнэ'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='phone'
                        className='block text-sm text-gray-700 mb-2'>
                        Утасны дугаар *
                      </label>
                      <input
                        type='tel'
                        id='phone'
                        name='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none'
                        placeholder='9911-2233'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm text-gray-700 mb-2'>
                      Имэйл хаяг *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none'
                      placeholder='name@example.com'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='subject'
                      className='block text-sm text-gray-700 mb-2'>
                      Сэдэв *
                    </label>
                    <select
                      id='subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none'>
                      <option value=''>Сэдвээ сонгоно уу</option>
                      {subjects.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm text-gray-700 mb-2'>
                      Зурвас *
                    </label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent outline-none resize-none'
                      placeholder='Таны хэрэгцээ, байршил, хэдэн камер хэрэгтэй зэргийг бичнэ үү...'
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-[#1e3a8a] text-white px-6 py-4 rounded-lg hover:bg-[#1e40af] transition-colors flex items-center justify-center gap-2'>
                    <Send className='h-5 w-5' />
                    Илгээх
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-gray-200 rounded-xl overflow-hidden h-[400px] flex items-center justify-center'>
            <div className='text-center text-gray-500'>
              <MapPin className='h-16 w-16 mx-auto mb-4 text-gray-400' />
              <p className='text-lg'>Байршил</p>
              <p className='text-sm'>{company.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className='py-16 bg-[#1e3a8a] text-white'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl mb-4'>Яаралтай тусламж хэрэгтэй юу?</h2>
          <p className='text-xl text-blue-100 mb-8'>
            Яаралтай тохиолдолд манай шуурхай албатай шууд холбогдоорой
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a
              href={telHref(company.phones[0])}
              className='bg-white text-[#1e3a8a] px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2'>
              <Phone className='h-5 w-5' />
              {company.phones[0]}
            </a>
            <a
              href={`mailto:${company.email}`}
              className='bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg hover:bg-white/20 transition-colors border border-white/20 inline-flex items-center gap-2'>
              <Mail className='h-5 w-5' />
              {company.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
