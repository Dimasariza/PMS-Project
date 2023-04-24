<?php

namespace App\Rules\UserTitle;

use App\Enums\AccessTitle;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class AccessNameExists implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if(!$value) {
            $fail("Invalid json structure");
        }

        $defaultAccess = AccessTitle::toArrayColumn();

        if(count($defaultAccess) !== count($value)) {
            $fail(sprintf("Total length access title given is not the same, expected %d, got %d", count($defaultAccess), count($value)));
        }

        foreach ($value as $access => $currValue) {
            if(!in_array($access, $defaultAccess)) {
                $fail("Unknown access type '{$access}'");
            }

            if(!is_bool($value)) {
                $fail("Access type value must be boolean, got {$currValue}");
            }
        }
    }
}
