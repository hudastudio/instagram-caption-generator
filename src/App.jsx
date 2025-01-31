import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2 } from 'lucide-react';
import { templates } from '@/data/templates';
import { cn } from '@/lib/utils';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [contentDescription, setContentDescription] = useState('');
  const [topic, setTopic] = useState('');
  const [targetAudience, setTargetAudience] = useState('genz');
  const [tone, setTone] = useState('funny');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const audiences = {
    genz: 'Gen Z (13-26 tahun)',
    millennial: 'Milenial (27-42 tahun)',
    genx: 'Gen X (43-58 tahun)',
    boomer: 'Baby Boomer (59-77 tahun)',
    professional: 'Profesional Bisnis',
    general: 'Umum'
  };

  const tones = {
    funny: 'Lucu',
    business: 'Bisnis',
    love: 'Romansa',
    informative: 'Informatif',
    casual: 'Santai',
    formal: 'Formal'
  };

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
    setContentDescription(template.content);
    setTopic(template.topic);
  };

  const generateCaption = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': import.meta.env.VITE_GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Buatkan caption Instagram yang menarik untuk: "${contentDescription}". Ubah tanda [ ] dengan informasi yang relevan.
                     Topik: ${topic}
                     Target Audience: ${audiences[targetAudience]}
                     Nada: ${tones[tone]}
                     Sertakan hashtag dan emoji yang relevan.`
            }]
          }]
        })
      });

      const data = await response.json();
      setGeneratedCaption(data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error('Error:', error);
      setGeneratedCaption('Gagal membuat caption. Silakan coba lagi.');
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCaption);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-gray-900">
            Generator Caption Instagram AI
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Template Caption:</label>
            <div className="flex flex-wrap gap-2">
              {templates.map((template) => (
                <Badge
                  key={template.id}
                  variant={selectedTemplate?.id === template.id ? "default" : "outline"}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleTemplateClick(template)}
                >
                  {template.title}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Deskripsi Konten:</label>
            <Textarea
              placeholder="Ceritakan tentang konten yang ingin kamu posting..."
              value={contentDescription}
              onChange={(e) => setContentDescription(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Topik:</label>
            <Input
              placeholder="Contoh: Makanan, Travel, Fashion..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Target Audiens:</label>
            <Select value={targetAudience} onValueChange={setTargetAudience}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(audiences).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Nada Bahasa:</label>
            <Select value={tone} onValueChange={setTone}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(tones).map(([key, label]) => (
                  <SelectItem key={key} value={key}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            className="w-full"
            onClick={generateCaption}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Membuat Caption...
              </>
            ) : (
              'Buat Caption'
            )}
          </Button>

          {generatedCaption && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Caption yang Dihasilkan:</label>
              <div className="relative">
                <Textarea
                  value={generatedCaption}
                  readOnly
                  className="min-h-[150px]"
                />
                <Button
                  variant="secondary"
                  className="absolute right-2 bottom-2"
                  onClick={copyToClipboard}
                >
                  Salin
                </Button>
              </div>

              <Alert className={cn(
                "fixed top-4 right-4 w-72 transition-opacity duration-300",
                showAlert ? "opacity-100" : "opacity-0 pointer-events-none"
              )}>
                <AlertDescription>
                  Caption berhasil disalin!
                </AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;