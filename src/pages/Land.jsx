import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LandPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Land</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>MementoLand Map</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for MementoLand Map */}
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <p>MementoLand Map visualization will be implemented here.</p>
          </div>
          <Button className="mt-4">View Detailed Map</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for categories */}
          <ul className="list-disc list-inside">
            <li>Link</li>
            <li>Video</li>
            <li>Image</li>
            <li>Handwriting</li>
            <li>Notes</li>
            <li>Highlight (Quotes)</li>
          </ul>
          <Button className="mt-4">View Categories Library</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="Search your information" className="mb-4" />
          <Button>Search</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Connection</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Placeholder for connections */}
          <p>Connections between related pieces of information will be displayed here.</p>
          <Button className="mt-4">View Connections</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandPage;