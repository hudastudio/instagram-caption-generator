import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search } from 'lucide-react';

const TemplateSearchDialog = ({ open, onOpenChange, templates, onSelectTemplate }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTemplates = templates.filter(template =>
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[80vh]">
                <DialogHeader>
                    <DialogTitle>Browse Templates</DialogTitle>
                </DialogHeader>

                <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                        placeholder="Search templates..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-8"
                    />
                </div>

                <ScrollArea className="h-[60vh] mt-4">
                    <div className="space-y-4">
                        {filteredTemplates.map((template) => (
                            <div
                                key={template.id}
                                onClick={() => {
                                    onSelectTemplate(template);
                                    onOpenChange(false);
                                }}
                                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                            >
                                <h3 className="font-medium mb-2">{template.title}</h3>
                                <p className="text-sm text-gray-600">{template.content}</p>
                                <div className="mt-2">
                                    <span className="text-xs text-gray-500">{template.topic}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}

export default TemplateSearchDialog;