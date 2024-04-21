import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const links = [
  {
    name: "Portofolio",
    href: "https://www.imamrifaidev.my.id",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohammad-imam-rifai-79bab9265/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/maspalul_?igsh=MTNnMjdzczFtbXBoNQ==",
  },
  {
    name: "Fastwork",
    href: "https://fastwork.id/user/imamrifai/web-development-84613121?utm_source=app_sharing",
  },
  {
    name: "Medium",
    href: "https://medium.com/@imamrifaibisnis",
  },
  {
    name: "Github",
    href: "https://github.com/mohimamrifai",
  },
];

export default function Home() {
  return (
    <main>
      <Card className="w-11/12 md:w-8/12 lg:w-4/12 lg:mt-5 mt-5 mx-auto md:mt-20">
        <CardHeader>
          <Avatar className="w-10/12 md:w-6/12 h-64 lg:h-56 mx-auto mb-5">
            <AvatarImage
              src="/profile.jpeg"
              alt="@shadcn"
              className="object-cover"
            />
            <AvatarFallback className="bg-slate-400">IM</AvatarFallback>
          </Avatar>
          <CardTitle className="mx-auto font-bold text-2xl">
            Mohammad imam rifai
          </CardTitle>
          <CardDescription className="text-center">
            Programmer Otodidak | Fullstack Web Developer | Freelancer
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 md:grid md:grid-cols-2">
        <Button variant="destructive" asChild className="w-full">
              <Link target="_blank" href={'https://wa.link/iy2vjg'}>Bikin Website</Link>
            </Button>
          {links.map((link) => (
            <Button key={link.name} asChild className="w-full">
              <Link target="_blank" href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center">
          <p>Created by imamrifai</p>
        </CardFooter>
      </Card>
    </main>
  );
}
