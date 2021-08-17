import { Link } from "shared/components";

interface InfoCardProps {
  description: string;
  title: string;
  url: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ description, title, url }) => {
  return (
    <Link
      className="
        border focus:border-blue-600 rounded-xl outline-none
        p-6 space-y-3
        text-left hover:text-blue-600
      "
      href={url}
    >
      <h2 className="text-2xl font-bold">{title} &rarr;</h2>
      <p className="mt-4 text-xl">{description}</p>
    </Link>
  );
};

export { InfoCard };
