import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  BookOpen,
  Cpu,
  MapPin,
  Phone,
  Music,
  Book,
  Plane,
} from "lucide-react"
import { ResumeDownloadButton } from "@/components/resume-download-button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-xl">Bhaskar Kumar</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                Education
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <ResumeDownloadButton variant="outline" className="ml-auto hidden h-8 md:flex">
                Resume
              </ResumeDownloadButton>
            </div>
            <nav className="flex items-center">
              <Link href="https://github.com" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative space-y-8 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="absolute inset-0 z-0 opacity-10">
            <Image src="/images/hero-bg.png" alt="Background" fill className="object-cover" priority />
          </div>
          <div className="container relative z-10 flex flex-col items-center gap-6 text-center">
            <div className="relative h-48 w-48 md:h-64 md:w-64 lg:h-80 lg:w-80">
              <div className="absolute inset-0 rounded-full border-4 border-background shadow-xl overflow-hidden">
                <Image
                  src="/images/bhaskar-profile-side.jpg"
                  alt="Bhaskar Kumar"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Bhaskar Kumar
            </h1>
            <h2 className="text-xl text-muted-foreground sm:text-2xl">Computer Science Engineering Student</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <Link href="mailto:bhaskar2007kumarz@gmail.com?subject=Hello%20Bhaskar&body=Hi%20Bhaskar,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0A%0ABest%20regards">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#projects">
                  <Code className="mr-2 h-4 w-4" /> View Projects
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                I have a strong foundation in Web development, proficient in front-end technologies like HTML, CSS. With
                hands-on experience in programming languages like Python and C. I have a solid understanding of
                operating systems, with an introductory knowledge of Linux.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                My approach to problem-solving is grounded in design thinking, ensuring user-centric and innovative
                solutions. I'm currently pursuing my Bachelor's degree in Computer Science Engineering at Chitkara
                University, Himachal Pradesh.
              </p>
              <div className="mt-6 flex flex-col space-y-3">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=Muzaffarpur,+Bihar,+India"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Muzaffarpur, Bihar, India
                  </Link>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-muted-foreground" />
                  <Link href="tel:+919199279131" className="hover:underline">
                    +91 9199279131
                  </Link>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-muted-foreground" />
                  <Link href="mailto:bhaskar2007kumarz@gmail.com" className="hover:underline">
                    bhaskar2007kumarz@gmail.com
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[400px] w-full max-w-[400px] overflow-hidden rounded-lg shadow-lg">
                <Image src="/images/bhaskar-lamppost.jpg" alt="About Bhaskar" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bachelor of Engineering in Computer Science</CardTitle>
                  <CardDescription>Chitkara University, Himachal Pradesh</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Pursuing a comprehensive computer science curriculum with focus on software development, algorithms,
                    data structures, and emerging technologies.
                  </p>
                  <div className="mt-4">
                    <Badge variant="outline" className="mr-2">
                      August 2024 - Present
                    </Badge>
                    <Badge>CGPA: 8.91/10</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>12th Grade (CBSE)</CardTitle>
                  <CardDescription>Doon Senior Secondary School, Muzaffarpur, Bihar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2">
                      April 2022 - March 2024
                    </Badge>
                    <Badge>Percentage: 70.4%</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>10th Grade (CBSE)</CardTitle>
                  <CardDescription>Pantocrator Academy, Muzaffarpur, Bihar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <Badge variant="outline" className="mr-2">
                      April 2020 - March 2022
                    </Badge>
                    <Badge>Percentage: 95.8%</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="skills" className="container py-12 md:py-16 lg:py-20">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Skills</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Code className="mr-2 h-5 w-5" /> Web Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1">HTML</Badge>
                  <Badge className="px-3 py-1">CSS</Badge>
                  <Badge className="px-3 py-1">JavaScript</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" /> Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1">Python</Badge>
                  <Badge className="px-3 py-1">C</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Cpu className="mr-2 h-5 w-5" /> Other Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="px-3 py-1">Operating Systems</Badge>
                  <Badge className="px-3 py-1">Linux (Intro)</Badge>
                  <Badge className="px-3 py-1">Design Thinking</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/university-project.png"
                    alt="University Website Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>University Website Clone</CardTitle>
                  <CardDescription>Web Development Project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Developed a clone of a university website using HTML, CSS, and JavaScript. The project replicated
                    the layout and key features of the original site, including navigation, course listings, and news
                    updates.
                  </p>
                  <p className="mt-2">
                    Utilized HTML and CSS to create a responsive, user-friendly interface, and used JavaScript to add
                    dynamic elements for improved interactivity, showcasing my skills in front-end web development.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="#" className="flex items-center justify-center">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/images/ecommerce-project.png"
                    alt="E-commerce Website Project"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>E-commerce Website for Barbering Services</CardTitle>
                  <CardDescription>Full-stack Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Developing an e-commerce website for barbering services using front-end and back-end technologies.
                    Integrated AI for personalized recommendations and optimized the booking process.
                  </p>
                  <p className="mt-2">
                    Features include real-time booking, secure payment gateway, and a user-friendly interface to enhance
                    both customer and service provider experiences.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">AI Integration</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="#" className="flex items-center justify-center">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Project
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-bold tracking-tight mb-8">Languages & Hobbies</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 h-5 w-5" /> Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1">English</Badge>
                    <Badge className="px-3 py-1">Hindi</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="mr-2 h-5 w-5" /> Hobbies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Plane className="mr-2 h-5 w-5 text-muted-foreground" />
                      <span>Travelling</span>
                    </div>
                    <div className="flex items-center">
                      <Book className="mr-2 h-5 w-5 text-muted-foreground" />
                      <span>Reading Books</span>
                    </div>
                    <div className="flex items-center">
                      <Music className="mr-2 h-5 w-5 text-muted-foreground" />
                      <span>Listening to Music</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="container py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Get In Touch</h2>
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out for collaborations or just a chat!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 text-muted-foreground" />
                  <Link href="tel:+919199279131" className="hover:underline">
                    +91 9199279131
                  </Link>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-muted-foreground" />
                  <Link href="mailto:bhaskar2007kumarz@gmail.com" className="hover:underline">
                    bhaskar2007kumarz@gmail.com
                  </Link>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-muted-foreground" />
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=Muzaffarpur,+Bihar,+India"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    Muzaffarpur, Bihar, India
                  </Link>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-3 h-5 w-5 text-muted-foreground" />
                  <Link href="https://linkedin.com" className="hover:underline" target="_blank">
                    linkedin.com/in/bhaskarkumar
                  </Link>
                </div>
                <div className="flex items-center">
                  <Github className="mr-3 h-5 w-5 text-muted-foreground" />
                  <Link href="https://github.com" className="hover:underline" target="_blank">
                    github.com/bhaskarkumar
                  </Link>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-3">
                <Button className="w-full" asChild>
                  <Link href="mailto:bhaskar2007kumarz@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Send Email
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link
                    href="https://www.google.com/maps/search/?api=1&query=Muzaffarpur,+Bihar,+India"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" /> View on Map
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Bhaskar Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:bhaskar2007kumarz@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
