/**
 * Generated types placeholder.
 *
 * Once you have the schema applied to Supabase, regenerate this file with:
 *   npx supabase gen types typescript --project-id <ref> > src/lib/supabase/types.ts
 *
 * Until then, this minimal shape lets the app compile and provides the
 * fields used by the root proxy (`proxy.ts`), server actions, and the Stripe webhook.
 */
type SubscriptionStatus =
  | "trialing"
  | "active"
  | "past_due"
  | "canceled"
  | "incomplete"
  | "incomplete_expired"
  | "unpaid"
  | "paused";

type LeadStatus = "new" | "contacted" | "won" | "lost";
type UserRole = "admin" | "client";
type ExperienceLevel = "beginner" | "intermediate" | "advanced";
type AppointmentStatus = "scheduled" | "completed" | "cancelled" | "no_show";

type Iso = string;

type Timestamps = {
  created_at: Iso;
  updated_at: Iso;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: Timestamps & {
          id: string;
          role: UserRole;
          full_name: string | null;
          phone: string | null;
          avatar_url: string | null;
          birthdate: Iso | null;
          goals: string | null;
          notes: string | null;
        };
        Insert: {
          id: string;
          role?: UserRole;
          full_name?: string | null;
          phone?: string | null;
          avatar_url?: string | null;
          birthdate?: Iso | null;
          goals?: string | null;
          notes?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
        Relationships: [];
      };
      leads: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          message: string | null;
          source: string | null;
          status: LeadStatus;
          created_at: Iso;
        };
        Insert: {
          name: string;
          email: string;
          phone?: string | null;
          message?: string | null;
          source?: string | null;
          status?: LeadStatus;
        };
        Update: Partial<Database["public"]["Tables"]["leads"]["Insert"]>;
        Relationships: [];
      };
      training_plans: {
        Row: Timestamps & {
          id: string;
          title: string;
          slug: string;
          description: string | null;
          duration_weeks: number | null;
          level: ExperienceLevel | null;
          price_cents: number | null;
          currency: string;
          stripe_price_id: string | null;
          is_active: boolean;
          cover_url: string | null;
        };
        Insert: {
          title: string;
          slug: string;
          description?: string | null;
          duration_weeks?: number | null;
          level?: ExperienceLevel | null;
          price_cents?: number | null;
          currency?: string;
          stripe_price_id?: string | null;
          is_active?: boolean;
          cover_url?: string | null;
        };
        Update: Partial<
          Database["public"]["Tables"]["training_plans"]["Insert"]
        >;
        Relationships: [];
      };
      subscriptions: {
        Row: Timestamps & {
          id: string;
          client_id: string;
          plan_id: string | null;
          stripe_subscription_id: string;
          status: SubscriptionStatus;
          current_period_end: Iso | null;
        };
        Insert: {
          client_id: string;
          plan_id?: string | null;
          stripe_subscription_id: string;
          status?: SubscriptionStatus;
          current_period_end?: Iso | null;
        };
        Update: Partial<
          Database["public"]["Tables"]["subscriptions"]["Insert"]
        >;
        Relationships: [];
      };
      routines: {
        Row: Timestamps & {
          id: string;
          client_id: string;
          title: string;
          week_number: number | null;
          notes: string | null;
          published_at: Iso | null;
        };
        Insert: {
          client_id: string;
          title: string;
          week_number?: number | null;
          notes?: string | null;
          published_at?: Iso | null;
        };
        Update: Partial<Database["public"]["Tables"]["routines"]["Insert"]>;
        Relationships: [];
      };
      routine_exercises: {
        Row: {
          id: string;
          routine_id: string;
          name: string;
          sets: number | null;
          reps: string | null;
          rest_seconds: number | null;
          tempo: string | null;
          video_url: string | null;
          order_index: number;
        };
        Insert: {
          routine_id: string;
          name: string;
          sets?: number | null;
          reps?: string | null;
          rest_seconds?: number | null;
          tempo?: string | null;
          video_url?: string | null;
          order_index?: number;
        };
        Update: Partial<
          Database["public"]["Tables"]["routine_exercises"]["Insert"]
        >;
        Relationships: [];
      };
      diets: {
        Row: Timestamps & {
          id: string;
          client_id: string;
          title: string;
          kcal_target: number | null;
          notes: string | null;
          published_at: Iso | null;
        };
        Insert: {
          client_id: string;
          title: string;
          kcal_target?: number | null;
          notes?: string | null;
          published_at?: Iso | null;
        };
        Update: Partial<Database["public"]["Tables"]["diets"]["Insert"]>;
        Relationships: [];
      };
      diet_meals: {
        Row: {
          id: string;
          diet_id: string;
          meal_type: "breakfast" | "lunch" | "dinner" | "snack";
          description: string;
          kcal: number | null;
          order_index: number;
        };
        Insert: {
          diet_id: string;
          meal_type: "breakfast" | "lunch" | "dinner" | "snack";
          description: string;
          kcal?: number | null;
          order_index?: number;
        };
        Update: Partial<Database["public"]["Tables"]["diet_meals"]["Insert"]>;
        Relationships: [];
      };
      appointments: {
        Row: Timestamps & {
          id: string;
          client_id: string;
          starts_at: Iso;
          ends_at: Iso;
          location: string | null;
          status: AppointmentStatus;
          notes: string | null;
        };
        Insert: {
          client_id: string;
          starts_at: Iso;
          ends_at: Iso;
          location?: string | null;
          status?: AppointmentStatus;
          notes?: string | null;
        };
        Update: Partial<
          Database["public"]["Tables"]["appointments"]["Insert"]
        >;
        Relationships: [];
      };
      posts: {
        Row: Timestamps & {
          id: string;
          slug: string;
          title: string;
          excerpt: string | null;
          content_md: string;
          cover_url: string | null;
          author_id: string | null;
          published_at: Iso | null;
          tags: string[] | null;
        };
        Insert: {
          slug: string;
          title: string;
          excerpt?: string | null;
          content_md: string;
          cover_url?: string | null;
          author_id?: string | null;
          published_at?: Iso | null;
          tags?: string[] | null;
        };
        Update: Partial<Database["public"]["Tables"]["posts"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      user_role: UserRole;
      subscription_status: SubscriptionStatus;
      lead_status: LeadStatus;
      experience_level: ExperienceLevel;
      appointment_status: AppointmentStatus;
      meal_type: "breakfast" | "lunch" | "dinner" | "snack";
    };
    CompositeTypes: Record<string, never>;
  };
};
