import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center" > 
    <LoginButton asChild>
      <Button size='lg' variant='secondary'>Login!</Button>
      
    </LoginButton>
    </main>
  );
  }
