import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { sendNotification } from "@/services/notifications.service";
import { navigate } from "astro:transitions/client";

interface FormProps {
  id: string;
  [key: string]: any; // Permite props adicionales de Astro
}

export function Form({ id }: FormProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
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

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    try {
      await sendNotification(data);
      setSuccess('Mensaje enviado correctamente.');
    } catch (error) {
      if(error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
        setError('Podrás enviar otro mensaje en unos minutos.');
      }
      console.error(error);
    } finally {
      setTimeout(() => {
        setError(null);
        setSuccess(null);
      }, 3500);
    }
  }

  useEffect(() => {
    const isValid = data.name !== "" && data.email !== "" && data.phone !== "" && data.terms;
    setIsDisabled(!isValid);
  }, [data]);

  return (
    <div  id={id} className="min-h-screen py-16 px-4 bg-[#ede6cc] font-[Nunito,sans-serif]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1b1202] tracking-[0.15em]">
            CONTACTO
          </h2>

          {/* Separator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-[#6c6534] max-w-[120px]" />
            <div className="text-[#6c6534]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 357 357">
                <path fill="currentColor" d="M357,204H0v-51h357V204z"></path>
              </svg>
            </div>
            <div className="flex-1 h-px bg-[#6c6534] max-w-[120px]" />
          </div>

          {/* <h3 className="text-2xl font-semibold mb-3 text-[#312e17]">
            La Casa del Bosque de Nubes
          </h3> */}
          <div className="text-base leading-relaxed text-[#312e17] space-y-2">
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-4 h-4" />
              <p>reservas@casanubegocta.com</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-4 h-4" />
              <p>Camino a Gocta, Cocachimba, Amazonas, 01100, Perú</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-4 h-4" />
              <p>+51 942 242 232</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-white p-12 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
        >
          <Input
            type="text"
            placeholder="Nombre completo"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="text-base px-4 py-3 border-[#d2b894] rounded text-black"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="text-base px-4 py-3 border-[#d2b894] rounded text-black"
            />
            <Input
              type="tel"
              placeholder="Teléfono"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className="text-base px-4 py-3 border-[#d2b894] rounded text-black"
            />
          </div>

          <Textarea
            placeholder="Escribe tu mensaje aquí"
            name="message"
            value={data.message}
            onChange={handleChange}
            rows={6}
            className="text-base px-4 py-3 border-[#d2b894] rounded resize-y text-black"
          />

          <div className="flex items-start gap-3 mt-2">
            <Checkbox
              id="terms"
              checked={data.terms}
              onCheckedChange={(checked) => setData({ ...data, terms: checked === true })}
              className="mt-1"
            />
            <Label
              htmlFor="terms"
              className="text-[15px] text-[#312e17] font-semibold leading-normal"
            >
              Acepto los términos y condiciones
            </Label>
          </div>

          <p className="text-sm leading-relaxed text-[#6c6534] italic -mt-2">
            Los datos recogidos en este formulario son procesados por La Casa del Bosque de Nubes y Amenitiz Solutions para gestionar las informaciónes de solicitud de contacto en el sitio web https://www.casanubegocta.com de acuerdo con nuestra Política de Privacidad.
          </p>

          <Button
            type="submit"
            disabled={isDisabled}
            className="mt-4 bg-[#6c6534] hover:bg-[#5a5429] text-white px-8 py-3.5 text-[17px] font-semibold rounded tracking-wide transition-all"
          >
            Envía tu mensaje
          </Button>
          {error && <span style={{ color: 'red' }}>{error}</span>}
          {success && <span style={{ color: 'green' }}>{success}</span>}
        </form>
      </div>
    </div>
  );
}