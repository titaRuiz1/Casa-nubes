import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function Form() {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="flex justify-center h-screen pt-10 bg-[#49423d] flex-col gap-10 items-center">
      <div className="text-center text-white w-1/2">
        <h3>La Casa del Bosque de Nubes</h3>
        <p>reservas@casanubegocta.com -
          Camino a Gocta, Cocachimba, Amazonas, 01100, Perú - +51942242232</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
        <Input type="text" placeholder="Nombre" name="name" value={data.name} onChange={handleChange} />
        <div className="flex gap-2">
          <Input type="email" placeholder="Email" name="email" value={data.email} onChange={handleChange} />
          <Input type="tel" placeholder="Teléfono" name="phone" value={data.phone} onChange={handleChange} />
        </div>
        <Textarea placeholder="Escribe tu mensaje aquí" name="message" value={data.message} onChange={handleChange} />
        <div className="flex items-center gap-3">
        <Checkbox id="terms" checked={data.terms} onCheckedChange={(checked) => setData({ ...data, terms: checked === true })} />
        <Label htmlFor="terms">Acepto los términos y condiciones</Label>
      </div>
      <span>Los datos recogidos en este formulario son procesados por La Casa del Bosque de Nubes y Amenitiz Solutions para gestionar las informaciónes de solicitud de contacto en el sitio web https://www.casanubegocta.com de acuerdo con nuestra Política de Privacidad.</span>
        <Button type="submit">Envia tu mensaje</Button>
      </form>
    </div>
  );
}