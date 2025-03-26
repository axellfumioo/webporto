"use client"
import { useState, useEffect, useRef } from "react";
import Cropper from "react-easy-crop";
import html2canvas from "html2canvas";

export default function FeedsGenerator() {
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [name, setName] = useState("");
  const [achievements, setAchievements] = useState<string[]>([""]);
  const [selectedTemplate, setSelectedTemplate] = useState("/template1.jpg");
  const [templateSize, setTemplateSize] = useState({ width: 400, height: 400 });
  const captureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = selectedTemplate;
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      setTemplateSize({ width: 500, height: 500 / aspectRatio });
    };
  }, [selectedTemplate]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => setImage(reader.result as string);
    }
  };

  const addAchievement = () => {
    setAchievements([...achievements, ""]);
  };

  const updateAchievement = (index: number, value: string) => {
    const newAchievements = [...achievements];
    newAchievements[index] = value;
    setAchievements(newAchievements);
  };

  const exportImage = async () => {
    if (captureRef.current) {
      const canvas = await html2canvas(captureRef.current);
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "feed.png";
      link.click();
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Feeds Generator</h1>
      <select onChange={(e) => setSelectedTemplate(e.target.value)} className="mb-4 p-2 border">
        <option value="/template1.jpg">Template 1</option>
      </select>
      <div
        ref={captureRef}
        className="relative bg-gray-200 flex justify-center items-center"
        style={{ width: templateSize.width, height: templateSize.height }}
      >
        <img src={selectedTemplate} alt="Template" className="absolute w-full h-full object-contain" />
        {image && (
          <div className="absolute w-32 h-32">
            <Cropper image={image} crop={crop} zoom={zoom} onCropChange={setCrop} onZoomChange={setZoom} />
          </div>
        )}
        <p className="absolute bottom-12 text-white font-bold text-lg">{name}</p>
        <div className="absolute bottom-4 flex flex-col text-white font-semibold">
          {achievements.map((ach, index) => (
            <p key={index}>{ach}</p>
          ))}
        </div>
      </div>
      <input type="file" accept="image/*" onChange={onFileChange} className="mb-4" />
      <input type="text" placeholder="Nama Peserta" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 mt-4 w-64" />
      <div className="mt-4 w-64">
        {achievements.map((ach, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Kejuaraan ${index + 1}`}
            value={ach}
            onChange={(e) => updateAchievement(index, e.target.value)}
            className="border p-2 mt-2 w-full"
          />
        ))}
        <button onClick={addAchievement} className="mt-2">Tambah Kejuaraan</button>
      </div>
      <button onClick={exportImage} className="mt-4 bg-blue-500 text-white">Export</button>
    </div>
  );
}
