import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Home</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Captures</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for recent captures */}
          <p>Your recent captures will appear here.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Connect Infor Recommendation</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for recommendations */}
          <p>Recommended connections will appear here.</p>
          <Button className="mt-4">View Details</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for analytics */}
          <p>Your information analytics will appear here.</p>
          <Button className="mt-4">View Full Report</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;