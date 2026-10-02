# SAQR MEDIA — Standalone

نسخة مستقلة مبنية من نسخة بيانات صقر ميديا الاحتياطية، بدون اعتماد على `@base44/sdk`.

## الموجود الآن
- RTL عربي + هوية صقر ميديا الداكنة/الفاتحة.
- 12 تصنيفًا من النسخة الاحتياطية.
- 451 خدمة من الـBackup مع أسعارها وحقولها.
- 24 منتجًا رقميًا.
- منصات وطرق دفع وإعدادات صقر ميديا.
- بحث وتصنيف وعرض خدمة وتفاصيل الخدمة.
- سلة + كميات + Checkout.
- تحويل الطلب إلى WhatsApp بدون طلب رقم الهاتف.
- وضع داكن/فاتح + صوت on/off محفوظ محليًا.
- صفحة صقر AI محلية تربط النص بالخدمات الموجودة فقط، مع مكان آمن لربط AI backend خارجي عبر `VITE_AI_ENDPOINT`.
- لوحة إدارة أولية `/admin` لتعديل أسعار الخدمات عند ربط Supabase.
- نسخة backup كاملة محفوظة في `public/data/backup.json` والوسائط في `public/media/`.
- مخطط Supabase كامل مبدئي في `supabase/schema.sql`.
- سكربت استيراد `scripts/import-backup.mjs`.

## تشغيل محلي
```bash
npm install
npm run dev
```

## ربط Supabase
1. أنشئ مشروع Supabase.
2. نفّذ `supabase/schema.sql`.
3. ضع `VITE_SUPABASE_URL` و `VITE_SUPABASE_ANON_KEY` في `.env.local`.
4. لاستيراد البيانات من الـBackup استخدم على جهازك:
```bash
SUPABASE_URL="..." SUPABASE_SERVICE_ROLE_KEY="..." npm run import:backup
```
مفتاح service role يستخدم فقط على جهاز/خادم الإدارة ولا يوضع داخل Frontend أو GitHub.

## نشر Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`
- أضف متغيرات البيئة في Cloudflare.
- اربط الدومين بعد نجاح أول Deploy.

## الصور/الفيديو/الصوت والـAI
النسخة الحالية لا تحتوي مفاتيح أي مزود خارجي. لا تضع API keys في Vite frontend. اربط مولدات الصور/الفيديو/الصوت وAI عبر backend/Edge Function آمنة، ويمكن ضبط `VITE_AI_ENDPOINT` ليكون endpoint عامًا لا يحتوي السر.

## ملاحظة مهمة
الـBackup الحالي يحتوي 451 Service و24 Product و12 Category وغيرها. لا يحتوي بيانات Offers/Packages/Courses/Projects/Orders فعلية؛ لذلك هذه الجداول موجودة في البنية لكنها لا تُخترع من الـBackup.
