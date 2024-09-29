'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// Import images
import heroImage1 from "@/public/images/hero-image-1.jpeg"
import heroImage2 from "@/public/images/hero-image-2.jpeg"
import heroImage3 from "@/public/images/hero-image-3.jpeg"
import sportsDay from "@/public/images/sports-day.jpeg"
import scienceFair from "@/public/images/science-fair.jpeg"
import annualFunction from "@/public/images/annual-function.png"
import culturalFest from "@/public/images/cultural-fest.jpeg"
import campusImage from "@/public/images/campus.jpeg"

export default function SchoolLandingPageComponent() {
  const heroImages = [
    heroImage1,
    heroImage2,
    heroImage3,
  ]

  const activities = [
    { name: "Sports Day", image: sportsDay },
    { name: "Science Fair", image: scienceFair },
    { name: "Annual Function", image: annualFunction },
    { name: "Cultural Fest", image: culturalFest },
  ]

  return (
    <div className="flex flex-col ">

      <main className="flex-grow">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {heroImages.map((src, index) => (
                  <CarouselItem key={index}>
                    <Image
                      src={src}
                      alt={`School image ${index + 1}`}
                      width={800}
                      height={400}
                      className="w-full rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">School Activities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((activity, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      width={300}
                      height={200}
                      className="w-full rounded-lg mb-2 object-contain"
                    />
                    <h3 className="text-xl font-semibold">{activity.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Campus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src={campusImage}
                  alt="School Campus"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">State-of-the-art Facilities</h3>
                <p className="text-muted-foreground mb-6">
                  Our campus boasts modern classrooms, well-equipped laboratories, a extensive library, 
                  and spacious playgrounds to ensure a holistic learning environment for our students.
                </p>
                <Button>Take a Virtual Tour</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p>123 School Street, Chamorshi</p>
              <p>Maharashtra, India</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@krushakmhschool.edu</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">School Calendar</Link></li>
                <li><Link href="#" className="hover:underline">Parent Portal</Link></li>
                <li><Link href="#" className="hover:underline">Student Resources</Link></li>
                <li><Link href="#" className="hover:underline">Alumni</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-accent">Facebook</Link>
                <Link href="#" className="hover:text-accent">Twitter</Link>
                <Link href="#" className="hover:text-accent">Instagram</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 Krushak High School, Chamorshi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}