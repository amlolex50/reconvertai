import { SidebarProvider, Sidebar, SidebarContent, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, BarChart2, Settings, HelpCircle } from "lucide-react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarContent className="py-4">
            <div className="px-4 py-2">
              <h1 className="text-xl font-bold">ReConvert AI</h1>
            </div>
            <nav className="space-y-1 px-2">
              <NavItem icon={<Home className="w-5 h-5" />} href="/" label="Dashboard" />
              <NavItem
                icon={<PlusCircle className="w-5 h-5" />}
                href="/campaigns/new"
                label="New Campaign"
              />
              <NavItem
                icon={<BarChart2 className="w-5 h-5" />}
                href="/analytics"
                label="Analytics"
              />
              <NavItem
                icon={<Settings className="w-5 h-5" />}
                href="/settings"
                label="Settings"
              />
              <NavItem
                icon={<HelpCircle className="w-5 h-5" />}
                href="/support"
                label="Support"
              />
            </nav>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <SidebarTrigger />
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

const NavItem = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => (
  <Button
    variant="ghost"
    className="w-full justify-start gap-2"
    asChild
  >
    <a href={href}>
      {icon}
      <span>{label}</span>
    </a>
  </Button>
);