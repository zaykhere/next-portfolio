import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@zaykhere",
    icon: Icons.gitHub,
    link: "https://github.com/zaykhere",
  },
  {
    name: "LinkedIn",
    username: "Zain Javed",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/zain-javed-here",
  },
  {
    name: "Gmail",
    username: "zainjhere",
    icon: Icons.gmail,
    link: "mailto:zainjhere@gmail.com",
  },
];
