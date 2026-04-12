
'use client';

import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SignInPage() {
  const handleSignIn = () => {
    // In a real app, this would involve a call to an auth provider.
    // For this prototype, we'll just set a cookie to simulate a session.
    document.cookie = 'auth_token=signed_in; path=/; max-age=3600';
    // Redirect to the blog after "signing in"
    window.location.href = '/blog';
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Please sign in to view this content.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button onClick={handleSignIn} className="w-full">
            Sign in with Google
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our terms and conditions.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
