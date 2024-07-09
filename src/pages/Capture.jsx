import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CapturePage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Capture</h1>
      
      <Tabs defaultValue="digital">
        <TabsList>
          <TabsTrigger value="digital">Digital</TabsTrigger>
          <TabsTrigger value="handwriting">Handwriting</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="digital">
          <Card>
            <CardHeader>
              <CardTitle>Digital Capture</CardTitle>
            </CardHeader>
            <CardContent>
              <Input placeholder="Enter URL or text" className="mb-4" />
              <Button>Capture Digital Content</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="handwriting">
          <Card>
            <CardHeader>
              <CardTitle>Handwriting Capture</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Placeholder for handwriting capture interface */}
              <p>Handwriting capture interface will be implemented here.</p>
              <Button className="mt-4">Save Handwriting</Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Notes Capture</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea placeholder="Enter your notes here" className="mb-4" />
              <Button>Save Notes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CapturePage;