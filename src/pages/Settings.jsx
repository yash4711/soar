import { AuthLayout } from "@/components/layout/AuthLayout";
import { SettingsTabs } from "@/components/settings/SettingsTabs";

export default function SettingsPage() {
  return (
    <AuthLayout>
      <div className="max-w-5xl mx-auto">
        <SettingsTabs />
      </div>
    </AuthLayout>
  );
}
