import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Props = { imageUrl: string; username: string };

const UserCard = ({ imageUrl, username }: Props) => (
  <Card className="rounded-sm md:min-h-[400px] max-h-[300px] flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black border-primary/40">
    <CardContent className="flex items-center justify-center flex-col gap-10">
      <div className="relative md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full">
        <Image
          src={imageUrl}
          alt="user"
          width={200}
          height={200}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
      <p className="md:text-medium mt-4 text-sm">{username}</p>
    </CardContent>
  </Card>
);

export default UserCard;
