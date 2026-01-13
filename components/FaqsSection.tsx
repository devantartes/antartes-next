import FaqAccordion from "./FaqAccordion";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What is Antartes?",
    answer:
      "Antartes is a digital marketing agency that helps businesses grow their online presence and increase their revenue.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including SEO, PPC advertising, social media management, content marketing, and web design.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "While some results like PPC can be immediate, SEO and content marketing typically take 3-6 months to show significant impact.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "Yes, we tailor our strategies to fit businesses of all sizes, from startups to established enterprises.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We track key performance indicators (KPIs) such as website traffic, conversion rates, and return on investment (ROI) to ensure your goals are met.",
  },
  {
    question: "How can I get started with Antartes?",
    answer:
      "You can start by booking a free consultation through our contact form, where we'll discuss your business needs and goals.",
  },
];
export default function FaqsSection() {
  return (
    <div className="md:px-20 md:py-20 px-10 py-10" id="faq-section">
      <h1 className="text-4xl md:text-5xl font-bold font-poppins leading-tight">
        Frequently Asked Questions
      </h1>
      <p className="text-black/60">
        Quick answers to common questions to help you understand how we work.
      </p>

      <div className="mt-10 space-y-15">
        {faqs.map((faq, index) => (
          <FaqAccordion key={index} faq={faq} />
        ))}
      </div>
    </div>
  );
}
