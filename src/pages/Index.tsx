import { AuthForm } from "@/components/auth/AuthForm";
import { MainLayout } from "@/components/layout/MainLayout";

const Index = () => {
  // For demo purposes, we'll show the auth form
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight fade-in">
              ReConvert AI
            </h1>
            <p className="mt-2 text-lg text-gray-600 fade-in">
              Optimize your post-purchase experience with AI
            </p>
          </div>
          <AuthForm />
        </div>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Welcome back!</h1>
          <p className="text-muted-foreground">
            Here's what's happening with your store today.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Placeholder for metrics */}
          {["Total Revenue", "Active Campaigns", "Conversion Rate", "AOV"].map(
            (metric) => (
              <div
                key={metric}
                className="p-6 glass-card rounded-lg space-y-2 fade-in"
              >
                <h3 className="text-sm font-medium text-muted-foreground">
                  {metric}
                </h3>
                <p className="text-2xl font-bold">$0</p>
              </div>
            )
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;