import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript / TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIs & GraphQL",
  "Shadcn UI",
];

export default function About() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since 1500, when an unknown printer
            took a galley of type and scrambled it to make a type specimen
            book.
          </p>

          <p>
            It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-sm px-2 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}