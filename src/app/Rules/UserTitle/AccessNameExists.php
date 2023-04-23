<?php

namespace App\Rules\UserTitle;

use App\Models\UserTitle;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;

class AccessNameExists implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $requestedAccess = json_decode($value, true);
        $requestedValues = array_values($requestedAccess);

        foreach ($requestedValues as $value) {
            if($value !== true || $value !== false) {
                $fail("Invalid user title request values {$value}");
            }
        }

        $userTitle = UserTitle::query()->where('id', 1)->get(['access'])->toArray();

        if(!$userTitle) {
            return;
        }

        $titleKeys = array_keys($userTitle[0]["access"]);
        $requestKeys = array_keys($requestedAccess);

        if($titleKeys !== $requestKeys) {
            $fail("Invalid user title request keys");
        }
    }
}
