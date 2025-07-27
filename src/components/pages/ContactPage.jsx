import ContactHero from "../views/ContactViews/ContactHero"
import ContactForm from "../views/ContactViews/ContactForm"
import ContactInfo from "../views/ContactViews/ContactInfo"

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
