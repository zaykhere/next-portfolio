import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { Icons } from "@/components/common/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { pagesConfig } from "@/config/pages";
import profileImg from "@/public/profile-img.png";
import { cn } from "@/lib/utils";

export default function AboutSection() {
    return (
        <AnimatedSection
            direction="up"
            className="container space-y-6 bg-muted py-10 my-14 rounded-3xl"
            id="about"
        >
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-10">
                <AnimatedText
                    as="h2"
                    className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
                >
                    {pagesConfig.about.title}
                </AnimatedText>
                <AnimatedText
                    as="p"
                    delay={0.2}
                    className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                >
                    {pagesConfig.about.description}
                </AnimatedText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center max-w-[64rem] mx-auto px-4 sm:px-6">
                {/* Image Column */}
                <AnimatedSection delay={0.3} direction="right" className="relative justify-center flex">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-full md:h-[400px] max-w-sm rounded-[2rem] overflow-hidden border-4 border-muted/50 dark:border-muted-foreground/20 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10 rounded-[2rem]" />
                        <Image
                            src={profileImg}
                            alt="Zain Javed - About"
                            fill
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    {/* Decorative background blob */}
                    <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -z-10 -top-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
                </AnimatedSection>

                {/* Text Column */}
                <div className="flex flex-col space-y-6 max-w-xl mx-auto md:mx-0">
                    <AnimatedSection delay={0.4} direction="left" className="space-y-4">
                        <h3 className="text-2xl font-bold font-heading">
                            Hi, I&apos;m Zain Javed.
                        </h3>
                        <p className="leading-relaxed text-muted-foreground sm:text-lg">
                            I am a passionate Full Stack Developer with over 4 years of experience building scalable, high-performance web applications and systems. My journey in tech is driven by a focus on elegant problem-solving and writing clean, maintainable code.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.5} direction="left">
                        <p className="leading-relaxed text-muted-foreground sm:text-lg">
                            I specialize in the modern web stack, including <strong className="text-foreground">React, Next.js, Node.js,</strong> and databases like <strong className="text-foreground">Postgres and MySQL</strong>. My background involves architecting reliable backend infrastructure, crafting dynamic and responsive frontend interfaces, and integrating cutting-edge AI features into software solutions.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.6} direction="left">
                        <p className="leading-relaxed text-muted-foreground sm:text-lg">
                            Currently, I focus on constructing production-ready applications that deliver excellent user experiences seamlessly across all devices. When I&apos;m not coding, I enjoy exploring new technologies and contributing to the open-source community. Let&apos;s build something great together.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={0.7} direction="up" className="pt-4 flex items-center gap-4">
                        <Link
                            href="/resume"
                            className={cn(buttonVariants({ size: "lg", variant: "default" }))}
                        >
                            <Icons.post className="mr-2 h-4 w-4" />
                            View Resume
                        </Link>
                        <Link
                            href="/contact"
                            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
                        >
                            Get In Touch
                        </Link>
                    </AnimatedSection>
                </div>
            </div>
        </AnimatedSection>
    );
}
