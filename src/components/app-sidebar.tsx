"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Profile",
    email: "",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Amazone",
      logo: GalleryVerticalEnd,
      plan: "",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Create Article",
          url: "#",
        },
        {
          title: "Generated Article",
          url: "#",
        },
        {
          title: "Keyword Projects",
          url: "#",
        },
          {
          title: "Al Keyword to Article",
          url: "#",
        },
          {
          title: "Steal Competitor Keyword",
          url: "#",
        },
          {
          title: "Import Keyword from GSC",
          url: "#",
        },
          {
          title: "Manual Keyword to Article",
          url: "#",
        },
          {
          title: "Bulk Keyword to Article",
          url: "#",
        },
          {
          title: "Longtail Keyword to Article",
          url: "#",
        },
          {
          title: "Article Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Auto Blog",
      url: "#",
      icon: Bot,
      
    },
    {
      title: "Internal Links",
      url: "#",
      icon: BookOpen,
   
    },
    {
      title: "Free Backlinks",
      url: "#",
      icon: Settings2,
     
    },
       {
      title: "Integrations",
      url: "#",
      icon: Settings2,
     
    },
       {
      title: "Subscriptions",
      url: "#",
      icon: Settings2,
     
    },
       {
      title: "Affiliate Pro",
      url: "#",
      icon: Settings2,
     
    },   {
      title: "Help Center",
      url: "#",
      icon: Settings2,
     
    },   {
      title: "Upadates",
      url: "#",
      icon: Settings2,
     
    },   {
      title: "Live Chat Support",
      url: "#",
      icon: Settings2,
     
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
