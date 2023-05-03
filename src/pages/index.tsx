import MainScreen from "@/components/screens/MainScreen";
import { profile } from "@/data/profile";

export default function Home() {
  return <MainScreen profile={profile} />;
}
