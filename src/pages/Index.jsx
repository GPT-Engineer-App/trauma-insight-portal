import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [activeSection, setActiveSection] = useState("past-trauma");

  const sections = [
    {
      id: "past-trauma",
      title: "Past Trauma from Relationships",
      content: pastTraumaContent,
    },
    {
      id: "emotions",
      title: "Emotions",
      content: emotionsContent,
    },
    {
      id: "behaviors",
      title: "Behaviors",
      content: behaviorsContent,
    },
    {
      id: "impact",
      title: "Impact on Current Relationships",
      content: impactContent,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Understanding Relationship Trauma</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {sections.map((section) => (
          <Card
            key={section.id}
            className={`cursor-pointer transition-all ${
              activeSection === section.id ? "ring-2 ring-purple-500" : ""
            }`}
            onClick={() => setActiveSection(section.id)}
          >
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
      <div className="mt-8">
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className={`transition-opacity duration-300 ${
              activeSection === section.id ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
            <h2 className="text-3xl font-semibold mb-4">{section.title}</h2>
            <Accordion type="single" collapsible className="w-full">
              {section.content.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      {item.subcategories.map((subcat, subIndex) => (
                        <li key={subIndex} className="mb-2">
                          <strong>{subcat.title}</strong>
                          <ul className="list-circle pl-6 mt-1">
                            {subcat.items.map((subItem, subItemIndex) => (
                              <li key={subItemIndex}>{subItem}</li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

const pastTraumaContent = [
  {
    title: "Abuse",
    subcategories: [
      {
        title: "Physical Abuse",
        items: ["Violence", "Coercion"],
      },
      {
        title: "Emotional Abuse",
        items: ["Manipulation", "Verbal Attacks"],
      },
      {
        title: "Sexual Abuse",
        items: ["Unwanted Contact", "Coercion"],
      },
    ],
  },
  {
    title: "Neglect",
    subcategories: [
      {
        title: "Emotional Neglect",
        items: ["Lack of Support", "Dismissiveness"],
      },
      {
        title: "Physical Neglect",
        items: ["Basic Needs", "Safety"],
      },
    ],
  },
  {
    title: "Betrayal",
    subcategories: [
      {
        title: "Infidelity",
        items: ["Cheating", "Deception"],
      },
      {
        title: "Broken Promises",
        items: ["Unfulfilled Commitments", "Repeated Disappointment"],
      },
    ],
  },
  {
    title: "Loss",
    subcategories: [
      {
        title: "Death of a Loved One",
        items: ["Grieving Process", "Fear of Future Loss"],
      },
      {
        title: "Separation/Divorce",
        items: ["Emotional Turmoil", "Fear of Abandonment"],
      },
    ],
  },
];

const emotionsContent = [
  {
    title: "Fear",
    subcategories: [
      {
        title: "Fear of Rejection",
        items: ["Anxiety", "Avoidance"],
      },
      {
        title: "Fear of Intimacy",
        items: ["Vulnerability", "Emotional Distance"],
      },
    ],
  },
  {
    title: "Mistrust",
    subcategories: [
      {
        title: "Suspicion",
        items: ["Doubt", "Paranoia"],
      },
      {
        title: "Isolation",
        items: ["Withdrawing", "Loneliness"],
      },
    ],
  },
  {
    title: "Insecurity",
    subcategories: [
      {
        title: "Low Self-Esteem",
        items: ["Negative Self-Image", "Lack of Confidence"],
      },
      {
        title: "Need for Validation",
        items: ["Seeking Approval", "Dependence"],
      },
    ],
  },
  {
    title: "Grief",
    subcategories: [
      {
        title: "Prolonged Sadness",
        items: ["Depression", "Emotional Pain"],
      },
      {
        title: "Emotional Numbness",
        items: ["Detachment", "Suppression"],
      },
    ],
  },
];

const behaviorsContent = [
  {
    title: "Withdrawal",
    subcategories: [
      {
        title: "Avoidance of Intimacy",
        items: ["Emotional Guarding", "Reluctance"],
      },
      {
        title: "Isolation",
        items: ["Solitude", "Social Withdrawal"],
      },
    ],
  },
  {
    title: "Aggression",
    subcategories: [
      {
        title: "Defensive Anger",
        items: ["Outbursts", "Blame"],
      },
      {
        title: "Control",
        items: ["Dominance", "Manipulation"],
      },
    ],
  },
  {
    title: "Hyper-vigilance",
    subcategories: [
      {
        title: "Constant Alertness",
        items: ["Anxiety", "Scanning for Danger"],
      },
      {
        title: "Overanalyzing",
        items: ["Excessive Scrutiny", "Second-Guessing"],
      },
    ],
  },
];

const impactContent = [
  {
    title: "Trust Issues",
    subcategories: [
      {
        title: "Manifestations",
        items: ["Excessive Reassurance Seeking", "Invasion of Privacy"],
      },
      {
        title: "Outcomes",
        items: ["Erosion of Trust", "Emotional Distance"],
      },
    ],
  },
  {
    title: "Attachment Styles",
    subcategories: [
      {
        title: "Insecure Attachment",
        items: ["Anxious", "Avoidant"],
      },
      {
        title: "Secure Attachment",
        items: ["Balanced Relationships", "Challenges"],
      },
    ],
  },
  {
    title: "Communication Problems",
    subcategories: [
      {
        title: "Manifestations",
        items: ["Avoidance of Difficult Conversations", "Passive-Aggressive Behavior"],
      },
      {
        title: "Outcomes",
        items: ["Miscommunication", "Unmet Needs"],
      },
    ],
  },
  {
    title: "Emotional Regulation",
    subcategories: [
      {
        title: "Manifestations",
        items: ["Overreacting to Minor Issues", "Emotional Withdrawal"],
      },
      {
        title: "Outcomes",
        items: ["Strained Interactions", "Cycle of Conflict and Reconciliation"],
      },
    ],
  },
  {
    title: "Behavioral Patterns",
    subcategories: [
      {
        title: "Repetition of Trauma",
        items: ["Choosing Similar Partners", "Reenacting Past Dynamics"],
      },
      {
        title: "Self-Sabotage",
        items: ["Pushing Partner Away", "Fear of Success"],
      },
    ],
  },
];

export default Index;