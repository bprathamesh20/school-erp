'use client'
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md space-y-8">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <Lock className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-3xl font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <p className="text-center text-sm text-gray-600">
                        Access your dashboard and manage your resources
                    </p>
                    <Button 
                        onClick={() => signIn('undefined', {callbackUrl: '/dashboard'})} 
                        className="w-full"
                        size="lg"
                    >
                        Sign In
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}