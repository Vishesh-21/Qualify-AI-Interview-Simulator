"use client";

import React from "react";
import {
  Award,
  CheckCircle2,
  AlertCircle,
  Target,
  TrendingUp,
  MessageSquare,
  Code,
  Brain,
  Users,
  Sparkles,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dummyFeedbackArray, FeedbackData } from "@/utils/data";

const getCategoryIcon = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes("communication")) return MessageSquare;
  if (lower.includes("technical")) return Code;
  if (lower.includes("problem")) return Brain;
  if (lower.includes("cultural")) return Users;
  if (lower.includes("confidence")) return Sparkles;
  return Target;
};

const getScoreColor = (score: number) =>
  score >= 80
    ? "text-green-600"
    : score >= 60
    ? "text-yellow-600"
    : "text-red-600";

const getBarColor = (score: number) =>
  score >= 80 ? "bg-green-500" : score >= 60 ? "bg-yellow-500" : "bg-red-500";

const randomNumber = Math.floor(Math.random() * dummyFeedbackArray.length);
const dummyFeedback = dummyFeedbackArray[randomNumber];

const FeedbackComponent = ({
  feedback = dummyFeedback,
}: {
  feedback?: FeedbackData;
}) => {
  return (
    <div className="mx-auto max-w-5xl space-y-8 p-6">
      {/* Header */}
      <div className="text-center">
        <Award className="mx-auto mb-4 h-12 w-12 text-violet-600" />
        <h1 className="text-3xl font-bold">Interview Feedback</h1>
        <p className="mt-2 text-gray-600">
          Detailed analysis of your performance
        </p>
      </div>

      {/* Overall Score */}
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="text-sm font-medium text-gray-600">Overall Score</p>
          <p className="mt-2 text-5xl font-bold text-violet-600">
            {feedback.totalScore}/100
          </p>
          <Badge
            className="mt-4"
            variant={
              feedback.totalScore >= 80
                ? "default"
                : feedback.totalScore >= 60
                ? "secondary"
                : "destructive"
            }
          >
            {feedback.totalScore >= 80
              ? "Excellent"
              : feedback.totalScore >= 60
              ? "Good"
              : "Needs Improvement"}
          </Badge>
        </CardContent>
      </Card>

      {/* Category Scores */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {feedback.categoryScores.map((item, idx) => {
          const Icon = getCategoryIcon(item.category);
          return (
            <Card key={idx}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8 text-violet-600" />
                  <span
                    className={`text-2xl font-bold ${getScoreColor(
                      item.score
                    )}`}
                  >
                    {item.score}
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium">{item.category}</p>
                <div className="mt-3 h-2 rounded-full bg-gray-200">
                  <div
                    className={`h-2 rounded-full ${getBarColor(item.score)}`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Strengths & Improvements */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {feedback.strengths.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-orange-600" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {feedback.areasForImprovement.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Final Assessment */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-violet-600" />
            Final Assessment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">{feedback.finalAssignment}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackComponent;
