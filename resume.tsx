import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin } from "lucide-react"
import Link from "next/link"
import { ResumeDownloadButton } from "@/components/resume-download-button"

export default function Resume() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <Link href="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>
        <ResumeDownloadButton>Download Resume</ResumeDownloadButton>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">BHASKAR KUMAR</h1>
            <p className="text-muted-foreground mt-2">
              <Link href="tel:+919199279131" className="hover:underline">
                +91 9199279131
              </Link>{" "}
              |
              <Link href="mailto:bhaskar2007kumarz@gmail.com" className="hover:underline">
                {" "}
                bhaskar2007kumarz@gmail.com
              </Link>{" "}
              |
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Muzaffarpur,+Bihar,+India"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {" "}
                Muzaffarpur, Bihar, India
              </Link>
            </p>
          </div>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b pb-2 mb-3">About Me</h2>
            <p>
              I have a strong foundation in Web development, proficient in front-end technologies like HTML, CSS. With
              hands-on experience in programming languages like Python and C. I have a solid understanding of operating
              systems, with an introductory knowledge of Linux. My approach to problem-solving is grounded in design
              thinking, ensuring user-centric and innovative solutions.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b pb-2 mb-3">EDUCATION</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold">Chitkara University, Himachal Pradesh</h3>
                  <span>August 2024 - Present</span>
                </div>
                <p className="ml-4">Bachelor of Engineering in Computer Science- CGPA: 8.91</p>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold">Doon Senior Secondary School, Muzaffarpur, Bihar</h3>
                  <span>April 2022 – March 2024</span>
                </div>
                <p className="ml-4">12th (CBSE) – 70.4%</p>
              </div>

              <div>
                <div className="flex justify-between">
                  <h3 className="font-semibold">Pantocrator Academy, Muzaffarpur, Bihar</h3>
                  <span>April 2020 – March 2022</span>
                </div>
                <p className="ml-4">10th (CBSE) – 95.8%</p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b pb-2 mb-3">SKILLS</h2>
            <p>HTML & CSS | PYTHON | C | OPERATING SYSTEM | INTRODUCTION TO LINUX | DESIGN THINKING</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b pb-2 mb-3">Projects</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Portfolio Website:</h3>
                <p className="ml-4">
                  I developed a clone of a university website using HTML, CSS, and JavaScript. The project replicated
                  the layout and key features of the original site, including navigation, course listings, and news
                  updates. I utilized HTML and CSS to create a responsive, user-friendly interface, and used JavaScript
                  to add dynamic elements for improved interactivity, showcasing my skills in front-end web development.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">E-commerce Website:</h3>
                <p className="ml-4">
                  Developing an e-commerce website for barbering services using front-end and back-end technologies.
                  Integrated AI for personalized recommendations and optimized the booking process. Features include
                  real-time booking, secure payment gateway, and a user-friendly interface to enhance both customer and
                  service provider experiences.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold border-b pb-2 mb-3">Languages</h2>
            <p>English</p>
          </section>

          <section>
            <h2 className="text-xl font-bold border-b pb-2 mb-3">Hobbies</h2>
            <ul className="list-disc ml-6">
              <li>Travelling</li>
              <li>Reading Books</li>
              <li>Listening to Music</li>
            </ul>
          </section>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" asChild>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Muzaffarpur,+Bihar,+India"
                target="_blank"
                rel="noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" /> View Location on Map
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
