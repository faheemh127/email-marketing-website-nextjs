import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const ComparisonTable = () => {
  const providers = [
    {
      name: "Mailforge",
      color: "mailforge",
      cost: "$484 per month",
    },
    {
      name: "Google Workspace",
      color: "google",
      cost: "$1,680 per month",
    },
    {
      name: "Microsoft 365",
      color: "microsoft",
      cost: "$1,200 per month",
    },
  ];

  const features = [
    {
      name: "Deliverability Results",
      mailforge: true,
      google: false,
      microsoft: false,
    },
    {
      name: "Automated DNS Set Up",
      mailforge: true,
      google: false,
      microsoft: false,
    },
    {
      name: "Made for Cold Outreach",
      mailforge: true,
      google: false,
      microsoft: false,
    },
    {
      name: "Unlimited Mailboxes",
      mailforge: true,
      google: false,
      microsoft: false,
    },
    {
      name: "5-Minute Set Up",
      mailforge: true,
      google: false,
      microsoft: false,
    },
  ];

  const FeatureIcon = ({ hasFeature }: { hasFeature: boolean }) => {
    return hasFeature ? (
      <Check className="h-5 w-5 text-success" />
    ) : (
      <X className="h-5 w-5 text-error" />
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-4 bg-muted/30">
          <div className="px-8 py-6">
            <h3 className="font-semibold text-lg text-foreground">Features</h3>
          </div>
          {providers.map((provider) => (
            <div key={provider.name} className="px-8 py-6 text-center">
              <h3 className={`font-semibold text-lg text-${provider.color}`}>
                {provider.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Feature Rows */}
        {features.map((feature, index) => (
          <div
            data-index={index}
            key={feature.name}
            className="grid grid-cols-4 border-b border-border/50 last:border-b-0"
          >
            <div className="px-8 py-6">
              <span className="font-medium text-foreground">
                {feature.name}
              </span>
            </div>
            <div className="px-8 py-6 flex justify-center">
              <FeatureIcon hasFeature={feature.mailforge} />
            </div>
            <div className="px-8 py-6 flex justify-center">
              <FeatureIcon hasFeature={feature.google} />
            </div>
            <div className="px-8 py-6 flex justify-center">
              <FeatureIcon hasFeature={feature.microsoft} />
            </div>
          </div>
        ))}

        {/* Pricing Row */}
        <div className="grid grid-cols-4 bg-muted/20">
          <div className="px-8 py-6">
            <span className="font-semibold text-lg text-foreground">
              Cost per 200 Mailboxes
            </span>
          </div>
          {providers.map((provider) => (
            <div key={provider.name} className="px-8 py-6 text-center">
              <span className={`font-bold text-xl text-${provider.color}`}>
                {provider.cost}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ComparisonTable;
