import { useSelector } from "react-redux";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ProfileForm } from "./ProfileForm";

export function SettingsTabs() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Tabs defaultValue="edit-profile" className="w-full">
      <TabsList className="w-full max-w-[400px] h-auto flex flex-col sm:flex-row sm:h-10 bg-transparent gap-2 sm:gap-4">
        <TabsTrigger
          value="edit-profile"
          className="w-full sm:w-auto data-[state=active]:bg-background border-b-2 border-transparent data-[state=active]:border-blue-600"
        >
          Edit Profile
        </TabsTrigger>
        <TabsTrigger
          value="preferences"
          className="w-full sm:w-auto data-[state=active]:bg-background border-b-2 border-transparent data-[state=active]:border-blue-600"
        >
          Preferences
        </TabsTrigger>
        <TabsTrigger
          value="security"
          className="w-full sm:w-auto data-[state=active]:bg-background border-b-2 border-transparent data-[state=active]:border-blue-600"
        >
          Security
        </TabsTrigger>
      </TabsList>
      <div className="mt-6">
        <TabsContent value="edit-profile">
          <ProfileForm initialValues={user} />
        </TabsContent>
        <TabsContent value="preferences">
          <div className="text-center py-8 text-muted-foreground">
            Preferences settings coming soon
          </div>
        </TabsContent>
        <TabsContent value="security">
          <div className="text-center py-8 text-muted-foreground">
            Security settings coming soon
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
