import { Link } from "shared/components";

interface InfoCardProps {
  description: string;
  title: string;
  url: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ description, title, url }) => {
  return (
    <Link
      className="p-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"
      href={url}
    >
      <h2 className="text-2xl font-bold">{title} &rarr;</h2>
      <p className="mt-4 text-xl">{description}</p>
    </Link>
  );
};

export { InfoCard };
