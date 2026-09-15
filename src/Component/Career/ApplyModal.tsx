import React, { useState } from "react";
import { JobOpening } from "../../Data/company";
import { X, CheckCircle2, UploadCloud } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ApplyModalProps {
  job: JobOpening | null;
  onClose: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ job, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    portfolio: "",
    coverNote: "",
  });
  const [fileName, setFileName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="bg-white rounded-3xl p-6 sm:p-10 max-w-lg w-full relative shadow-2xl my-8 border border-neutral-100"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-800 transition-colors"
          >
            <X size={20} />
          </button>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-[#0B0E14] mb-2">Application Received!</h3>
              <p className="text-neutral-500 text-sm">
                Thank you for applying for the <strong>{job.title}</strong> role. Our engineering leadership will review your profile within 48 hours.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B4DFC]">
                  {job.department}
                </span>
                <h3 className="text-2xl font-bold text-[#0B0E14] tracking-tight">
                  {job.title}
                </h3>
                <p className="text-neutral-500 text-xs mt-1">
                  {job.location} • {job.type}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Alexandra Vance"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Portfolio / GitHub URL
                  </label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Resume / CV (PDF)
                  </label>
                  <label className="flex flex-col items-center justify-center border-2 border-dashed border-neutral-200 hover:border-[#5B4DFC] rounded-xl p-4 cursor-pointer transition-colors bg-neutral-50 hover:bg-neutral-50/80">
                    <UploadCloud size={24} className="text-neutral-400 mb-1" />
                    <span className="text-xs text-neutral-600 font-medium">
                      {fileName || "Click to upload or drag & drop"}
                    </span>
                    <span className="text-[10px] text-neutral-400 mt-0.5">PDF up to 10MB</span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Why SoftLunar?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="Tell us what excites you about building high-impact software systems..."
                    className="w-full px-4 py-2 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-[#5B4DFC] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[#0B0E14] text-white text-sm font-semibold hover:bg-neutral-800 transition-colors shadow-md cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
