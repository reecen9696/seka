import imgStrategy from "../assets/services/strategy-roadmap.png";
import imgAutomation from "../assets/services/automation.jpeg";
import imgProductBuild from "../assets/services/product-build.jpeg";

export type Service = {
  number: string;
  tab: string;
  title: string;
  summary: string;
  listLabel?: string;
  list?: string[];
  bestFor: string;
  img: string;
};

export const SERVICES: Service[] = [
  {
    number: "Service 01",
    tab: "Strategy",
    title: "AI strategy and roadmap",
    summary:
      "Audit your operations, find the highest-leverage AI opportunities, and leave with a prioritised roadmap your team can actually execute.",
    listLabel: "What this includes",
    list: [
      "Operations audit and AI readiness assessment",
      "Identification of highest-ROI automation and AI opportunities",
      "Prioritised 90-day and 12-month execution roadmap",
      "Vendor and tooling recommendations",
      "Change management and adoption planning",
    ],
    bestFor:
      "Businesses that want a confident, informed decision before committing budget to build.",
    img: imgStrategy,
  },
  {
    number: "Service 02",
    tab: "Automation",
    title: "Workflow automation",
    summary:
      "Find the workflows costing your team the most time and automate them across your existing systems, without disrupting operations.",
    listLabel: "Common use cases",
    list: [
      "Document processing and data extraction",
      "Internal approval and compliance workflows",
      "Client onboarding and communications automation",
      "Construction tendering and bid management tools",
      "Reporting and data pipeline automation",
      "Field service scheduling and dispatch intelligence",
    ],
    bestFor:
      "Operations, finance, and delivery teams spending too many hours on work that should not require human attention.",
    img: imgAutomation,
  },
  {
    number: "Service 03",
    tab: "Product build",
    title: "MVP and product build",
    summary:
      "When your AI opportunity needs a custom tool rather than an off-the-shelf product, we scope, build, and ship it, from brief to working product.",
    listLabel: "What this includes",
    list: [
      "Product scoping and technical architecture",
      "Full-stack development with AI and ML integration",
      "Data pipeline and warehousing setup",
      "QA, deployment, and handover",
      "Ongoing iteration and support",
    ],
    bestFor:
      "Businesses with a specific AI product vision that needs a technical partner to execute it end to end.",
    img: imgProductBuild,
  },
  {
    number: "Service 04",
    tab: "Talent",
    title: "Offshore staff augmentation",
    summary:
      "Vetted offshore AI, data, and engineering specialists placed directly into your team across Sri Lanka, Malaysia, and Indonesia.",
    listLabel: "Roles we place",
    list: [
      "Data engineers and analytics engineers",
      "Machine learning engineers",
      "AI developers and prompt engineers",
      "Data scientists and analysts",
      "AI project managers and delivery leads",
    ],
    bestFor:
      "Businesses that need specialist AI or data capability now, without a six-month local hiring cycle or a full-time Australian salary.",
    img: "https://cdn.sanity.io/images/e5ozko3p/production/25ad8c18b09dcb1a619b5d4f2dc3cf089f4bf56f-1196x854.jpg?auto=format",
  },
  {
    number: "Service 05",
    tab: "Teams",
    title: "Team design and build",
    summary:
      "Design the roles, recruit the people, and stand up the operating model for a new or restructured AI or data function.",
    bestFor:
      "Technology companies, scale-ups, and enterprise divisions that want to build an AI or data team quickly and cost-effectively, leveraging offshore talent without sacrificing quality or accountability.",
    img: "https://cdn.sanity.io/images/e5ozko3p/production/2f8b882dd8af720f1cabce9d125ca543b0ab4725-1228x1334.jpg?auto=format",
  },
];
