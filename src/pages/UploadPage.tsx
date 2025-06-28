
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Upload, FileText, Edit, Check, X } from 'lucide-react';

interface DigitizedData {
  'VLE ID': string;
  'Machine Type': string;
  'Hours Used': string;
  'Earnings (INR)': string;
}

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [vleId, setVleId] = useState('');
  const [loading, setLoading] = useState(false);
  const [digitizedData, setDigitizedData] = useState<DigitizedData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<DigitizedData | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadAndDigitize = async () => {
    if (!file || !vleId.trim()) {
      toast({
        title: "Missing Information",
        description: "Please select a file and enter VLE ID.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Simulate OCR processing
    setTimeout(() => {
      const mockData: DigitizedData = {
        'VLE ID': vleId,
        'Machine Type': 'Thresher',
        'Hours Used': '5',
        'Earnings (INR)': '1250'
      };
      
      setDigitizedData(mockData);
      setLoading(false);
      
      toast({
        title: "Digitization Complete",
        description: "Report has been processed successfully. Please verify the data.",
      });
    }, 2000);
  };

  const handleEdit = () => {
    setEditData({ ...digitizedData! });
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    setDigitizedData({ ...editData! });
    setIsEditing(false);
    toast({
      title: "Changes Saved",
      description: "Data has been updated successfully.",
    });
  };

  const handleCancelEdit = () => {
    setEditData(null);
    setIsEditing(false);
  };

  const handleConfirmSubmit = () => {
    alert(`Data for VLE ID: ${digitizedData?.['VLE ID']} submitted successfully!`);
    
    // Reset form
    setFile(null);
    setVleId('');
    setDigitizedData(null);
    setIsEditing(false);
    setEditData(null);
    
    // Reset file input
    const fileInput = document.getElementById('file-input') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Upload VLE Report</h1>
          <p className="text-gray-600">Upload and digitize Village Level Entrepreneur reports</p>
        </div>

        {!digitizedData ? (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Document
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="vle-id">VLE ID</Label>
                <Input
                  id="vle-id"
                  type="text"
                  value={vleId}
                  onChange={(e) => setVleId(e.target.value)}
                  placeholder="Enter VLE ID (e.g., VLE123)"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file-input">Report File (PDF or Image)</Label>
                <Input
                  id="file-input"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="cursor-pointer"
                />
                {file && (
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {file.name}
                  </p>
                )}
              </div>

              <Button
                onClick={handleUploadAndDigitize}
                className="w-full bg-green-600 hover:bg-green-700"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Processing Document...
                  </>
                ) : (
                  'Upload and Digitize'
                )}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  {isEditing ? 'Edit Digitized Data' : 'Verify Digitized Data'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Field</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(isEditing ? editData! : digitizedData).map(([key, value]) => (
                        <tr key={key}>
                          <td className="border border-gray-300 px-4 py-2 font-medium">{key}</td>
                          <td className="border border-gray-300 px-4 py-2">
                            {isEditing ? (
                              <Input
                                value={value}
                                onChange={(e) => setEditData(prev => ({ ...prev!, [key]: e.target.value }))}
                                className="w-full"
                              />
                            ) : (
                              value
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {isEditing ? (
                <>
                  <Button
                    onClick={handleSaveChanges}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    onClick={handleCancelEdit}
                    variant="outline"
                  >
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={handleEdit}
                    variant="outline"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Data
                  </Button>
                  <Button
                    onClick={handleConfirmSubmit}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Check className="h-4 w-4 mr-2" />
                    Confirm & Submit
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
