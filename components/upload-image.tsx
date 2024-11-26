'use client'
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function UploadImage() {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [description, setDescription] = useState('');
    const supabase = createClient();

    const router = useRouter()

    useEffect(() => {
        // Create a preview for the selected image
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setPreview(null);
        }
    }, [file]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(event.target.value);
    };

    const clearFile = () => {
        setFile(null);
        setPreview(null);
        // Clear the file input
        if (document.getElementById('fileInput')) {
            (document.getElementById('fileInput') as HTMLInputElement).value = '';
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!file) return;

        try {
            // Upload the file to Supabase storage
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('photos')
                .upload(`images/${Date.now()}_${file.name}`, file);

            if (uploadError) {
                console.error('Error uploading file:', uploadError);
                return;
            }

            // Save image details to the database
            const { data: insertData, error: insertError } = await supabase
                .from('images')
                .insert([
                    { link: uploadData.fullPath, description: description },
                ])
                .select();

            if (insertError) {
                console.error('Error saving image details:', insertError);
                return;
            }

            console.log('File uploaded successfully:', uploadData);
            console.log('Image details saved successfully:', insertData);
            router.push('/list-images')
            // Reset form
            clearFile();
            setDescription('');

        } catch (error) {
            console.error('Upload failed:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <h1>Upload New Image</h1>
                <div className="relative">
                    <Input 
                        id="fileInput"
                        type="file" 
                        onChange={handleFileChange} 
                        accept="image/*"
                        className="file:mr-4 file:rounded-md file:border-0 file:bg-primary file:text-white file:px-4 file:py-2 hover:file:bg-primary/90"
                    />
                    {preview && (
                        <div className="mt-4 relative">
                            <img 
                                src={preview} 
                                alt="Preview" 
                                className="w-full h-48 object-cover rounded-md"
                            />
                            <button
                                type="button"
                                onClick={clearFile}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </div>
                
                <Textarea 
                    value={description} 
                    onChange={handleDescriptionChange} 
                    placeholder="Enter image description" 
                    className="resize-none"
                />
                
                <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={!file}
                >
                    Upload Image
                </Button>
            </form>
        </div>
    );
}