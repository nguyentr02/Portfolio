import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Job {
  tab: string;
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  range: string;
  details: string[];
}

interface Project {
  name: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  previewUrl?: SafeResourceUrl;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  jobs: Job[] = [
    {
      tab: 'CAIRA-DAU',
      title: 'AI-Augmented Front-end Developer',
      company: 'CAIRA-DAU',
      location: 'Đà Nẵng, Việt Nam',
      range: 'May 2026 - Present',
      details: [
        'Built the Helpdesk/Ticket module of the University Management System end-to-end in 6 weeks (Next.js, Express, PostgreSQL, Socket.IO), now live in production.',
        'Designed the ticket workflow and role-based access for 7 user roles, with Google sign-in and realtime notifications.',
        'Wrote 439 automated tests, reaching 93% backend test coverage.',
        'Now building the online exam system: exam-taking with autosave and offline recovery, plus tools for staff to schedule exams, rooms and invigilators.',
      ],
    },
    {
      tab: 'SarasCare',
      title: 'Web Developer',
      company: 'SarasCare',
      location: 'Melbourne, VIC',
      range: 'August 2024 - October 2025',
      details: [
        'Developed and maintained responsive web applications, including the website for the Melbourne Diwali event, using modern frontend practices to improve usability and engagement.',
        'Built user-friendly UI components that increased event sign-up conversion rate by ~15%.',
        'Collaborated in a team of 4 developers, contributing to weekly code reviews and 20+ merged pull requests.',
        'Implemented UI improvements based on user feedback, reducing bounce rate by around 10%.',
      ],
    },
    {
      tab: 'Healthy Fungi',
      title: 'Full-stack Developer',
      company: 'Healthy Fungi',
      companyUrl: 'https://healthyfungi.com.au/',
      location: 'Melbourne, VIC',
      range: 'May 2023 - July 2024',
      details: [
        'Developed and customized a Shopify e-commerce website using Liquid, HTML, CSS, JavaScript, and Shopify APIs.',
        'Led and mentored a small team of designers and developers, ensuring smooth communication and task coordination.',
        'Coordinated with internal teams and external stakeholders throughout project delivery processes.',
        'Worked in a fast-paced international environment requiring adaptability, teamwork, and problem-solving skills.',
      ],
    },
    {
      tab: 'BAP Software',
      title: 'Blockchain Intern Developer',
      company: 'BAP Software',
      companyUrl: 'https://bap-software.net/en/',
      range: 'May 2022 - July 2022',
      details: [
        'Developed and deployed 3 Solidity smart contracts on the Ethereum network for secure token transfers and crowdfunding functionality.',
        'Utilized Web3.js and React to build the front-end user interface for interacting with the deployed smart contracts.',
      ],
    },
  ];

  projects: Project[] = [
    {
      name: 'UMS Helpdesk',
      description:
        'A ticketing system for a university: staff and students submit requests with attachments, the helpdesk routes them between departments, and everyone gets realtime updates. Supports 7 user roles with Google sign-in.',
      tech: ['Next.js', 'React', 'Express', 'Prisma', 'PostgreSQL', 'Socket.IO'],
      demoUrl: 'https://umshelpdesk.vercel.app/',
    },
    {
      name: 'KES Cafe Website',
      description:
        'A mobile-first website for KES Cafe: a full drink menu with a page for each drink, size-based pricing, a contact form, and one-tap ordering through Grab, Facebook and Zalo.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zod'],
      demoUrl: 'https://kescafe.vercel.app/',
    },
  ];

  constructor() {
    // Angular blocks iframe URLs by default; these are our own fixed demo links.
    const sanitizer = inject(DomSanitizer);
    for (const project of this.projects) {
      if (project.demoUrl) {
        project.previewUrl = sanitizer.bypassSecurityTrustResourceUrl(project.demoUrl);
      }
    }
  }

  selectedJob = 0;

  selectJob(index: number) {
    this.selectedJob = index;
  }

  scrollTo(sectionId: string, event: Event) {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
