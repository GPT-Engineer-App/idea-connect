import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for user information */}
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <Button className="mt-4">Edit Profile</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for settings */}
          <p>App settings and preferences will be displayed here.</p>
          <Button className="mt-4">Manage Settings</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Activity History</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for activity history */}
          <ul className="list-disc list-inside">
            <li>Captured new note - 2 hours ago</li>
            <li>Connected information - 1 day ago</li>
            <li>Updated profile - 3 days ago</li>
          </ul>
          <Button className="mt-4">View Full History</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;