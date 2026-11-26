export interface Congregation {
  slug: string; name: string; region: string; language: string;
  preacher: string; address: string; email: string;
  contacts: { name: string; phone: string }[];
  gatherings: { kind: string; name: string; day: string; time: string }[];
  photos: string[]; portrait: string; mapEmbed: string; mapLink: string;
  heroImage?: string;
  portraitSquare?: boolean;
  venueName?: string;
  venuePhoto?: string;
  transport?: {
    type: string;
    detail: string;
  }[];
  contactName?: string;
  additionalEmails?: string[];
  approved: boolean;
  detailsStatus?: "legacy" | "pending";
}
export const totalCongregations = 17;
const publicRecords = import.meta.glob<Congregation>("./congregations/*.public.json", { eager: true, import: "default" });
const localRecords = import.meta.glob<Congregation>("./congregations/*.local.json", { eager: true, import: "default" });
export const congregations = Object.values(publicRecords).filter(c => c.approved);
export const previewCongregations = process.env.CI === "true" ? [] : Object.values(localRecords);
export const availableCongregations = Array.from(new Map([...congregations, ...previewCongregations].map(c => [c.slug, c])).values());
