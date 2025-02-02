import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { History as HistoryIcon, Trash2, Search, Edit2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { updateHistory } from '@/services/db';

const truncateTitle = (title, limit = 100) => {
    if (!title) return '';
    return title.length > limit ? `${title.substring(0, limit)}...` : title;
};

const HistorySidebar = ({
    isOpen,
    setIsOpen,
    histories,
    handleDeleteHistory,
    handleClickedHistory,
    audiences,
    tones,
    onHistoryUpdated
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editingHistory, setEditingHistory] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [deletingHistory, setDeletingHistory] = useState(null);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const filteredHistories = useMemo(() => {
        if (!searchQuery.trim()) return histories;

        const query = searchQuery.toLowerCase();
        return histories.filter(history =>
            history.title?.toLowerCase().includes(query) ||
            history.description?.toLowerCase().includes(query)
        );
    }, [histories, searchQuery]);

    const handleEditClick = (e, history) => {
        e.stopPropagation();
        setEditingHistory(history);
        setNewTitle(history.title);
        setEditDialogOpen(true);
    };

    const handleSaveTitle = async () => {
        try {
            await updateHistory(editingHistory.id, { title: newTitle });
            setEditDialogOpen(false);
            if (onHistoryUpdated) {
                onHistoryUpdated();
            }
        } catch (error) {
            console.error('Error updating title:', error);
        }
    };

    const onDelete = (e, history) => {
        e.stopPropagation();
        setDeletingHistory(history);
        setIsDeleteDialogOpen(true);
    };

    const confirmDelete = (e) => {
        e.stopPropagation();
        if (deletingHistory) {
            handleDeleteHistory(deletingHistory.id);
        }
        setIsDeleteDialogOpen(false);
        setDeletingHistory(null);
    };

    return (
        <>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" className="fixed left-4 top-4">
                        <HistoryIcon className="h-4 w-4 mr-2" />
                        Riwayat Caption
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                        <SheetTitle>Riwayat Caption</SheetTitle>
                        <div className="relative mt-4">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                placeholder="Cari riwayat..."
                                className="pl-8"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </SheetHeader>
                    <ScrollArea className="h-[calc(100vh-12rem)]">
                        <div className="space-y-4 mt-4">
                            {filteredHistories.map((history) => (
                                <Card
                                    key={history.id}
                                    className="p-4 cursor-pointer hover:bg-gray-50"
                                    onClick={() => handleClickedHistory(history)}
                                >
                                    <h4 className="font-medium text-sm">
                                        {truncateTitle(history.title)}
                                    </h4>
                                    <p className="text-xs text-gray-500 mb-3 mt-1">
                                        {new Date(history.created_at).toLocaleString()}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={(e) => handleEditClick(e, history)}
                                            className="flex items-center text-blue-500 hover:text-blue-700 text-sm"
                                        >
                                            <Edit2 className="h-4 w-4 mr-1.5" />
                                            Edit Judul
                                        </button>
                                        <button
                                            onClick={(e) => onDelete(e, history)}
                                            className="flex items-center text-red-500 hover:text-red-700 text-sm"
                                        >
                                            <Trash2 className="h-4 w-4 mr-1.5" />
                                            Hapus
                                        </button>
                                    </div>
                                </Card>
                            ))}
                            {filteredHistories.length === 0 && (
                                <div className="text-center text-gray-500 py-8">
                                    Tidak ada riwayat yang ditemukan
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                </SheetContent>
            </Sheet>

            <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Edit Judul</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <Input
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder="Masukkan judul baru"
                        />
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setEditDialogOpen(false)}
                        >
                            Batal
                        </Button>
                        <Button
                            onClick={handleSaveTitle}
                            disabled={!newTitle.trim()}
                        >
                            Simpan
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <DialogContent onClick={(e) => e.stopPropagation()}>
                    <DialogHeader>
                        <DialogTitle>Konfirmasi Hapus</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                        <p>Apakah kamu yakin mau hapus riwayat caption <strong>{deletingHistory?.title ?? ''}</strong> ?</p>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsDeleteDialogOpen(false);
                            }}
                        >
                            Batal
                        </Button>
                        <Button
                            onClick={confirmDelete}
                        >
                            Hapus
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default HistorySidebar;