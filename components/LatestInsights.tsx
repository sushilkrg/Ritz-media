import { CalendarDays } from "lucide-react";

const blogs = [
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    date: "14/05/2026",
    title:
      "How a Real Estate Lead Generation Agency Helps Builders Get Qualified Buyers",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    date: "15/04/2026",
    title:
      "Why Every Brand Needs a Digital Marketing Strategy?",
  },
  {
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    date: "14/04/2026",
    title:
      "AI Tools Every Marketer Should Use in 2026",
  },
];

export default function LatestInsights() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex justify-between items-end mb-14">

          <div>

            <p className="uppercase text-[#C98A27] text-[18px] tracking-wide font-medium mb-4">
              Latest Insights
            </p>

            <h2 className="text-[36px] md:text-[62px] font-bold leading-[1.08] text-black mb-5">
              Here&apos;s what we&apos;ve been up to
            </h2>

            <p className="text-[20px] text-[#222]">
              Insights, launches, partnerships, and stories from across our ecosystem.
            </p>

          </div>

          <button className="border border-[#C98A27] text-black px-10 py-5 rounded-md text-[20px] font-medium hover:bg-[#C98A27] hover:text-white transition">
            Read more blogs
          </button>

        </div>

        {/* Blog Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (

            <div key={index} className="group cursor-pointer">

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[265px] object-cover group-hover:scale-105 duration-500"
                />

              </div>

              {/* Date */}

              <div className="flex items-center gap-3 mt-5 mb-4">

                <CalendarDays
                  size={20}
                  className="text-[#8b8b8b]"
                  strokeWidth={1.8}
                />

                <span className="text-[16px] text-[#666666]">
                  {blog.date}
                </span>

              </div>

              {/* Title */}

              <h3 className="text-[18px] leading-[1.4] font-semibold text-black hover:text-[#C98A27] transition">
                {blog.title}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}